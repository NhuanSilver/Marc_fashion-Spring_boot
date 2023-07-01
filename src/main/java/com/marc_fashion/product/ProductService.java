package com.marc_fashion.product;

import com.marc_fashion.category.Category;
import com.marc_fashion.category.CategoryRepository;
import com.marc_fashion.exception.NotFoundException;
import com.marc_fashion.image.Image;
import com.marc_fashion.image.ImageRepository;
import com.marc_fashion.order.OrderItem;
import com.marc_fashion.order.OrderItemRepository;
import com.marc_fashion.order.OrderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.Normalizer;
import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProductService implements IProductService {
    private final ProductRepository repository;
    private final CategoryRepository categoryRepository;
    private final ProductVariantRepository variantRepository;
    private final ImageRepository imageRepository;
    private final ProductDTOMapper mapper;
    private final OrderItemRepository orderItemRepository;

    @Value("${application.upload.path}")
    private String uploadFolder;

    @Override
    public ProductPage getAllProduct(Integer page) {
        page = page >= 1 ? page - 1 : page;
        Pageable pageable = PageRequest.of(page, 8);
        Page<Product> productPage = repository.findAll(pageable);
        List<ProductDTO> products = productPage
                .getContent()
                .stream().map(mapper::toProductDTO)
                .collect(Collectors.toList());
        return ProductPage.builder()
                .totalPages(productPage.getTotalPages())
                .totalElements(productPage.getTotalElements())
                .products(products)
                .build();
    }

    @Override
    public ProductDTO getProductById(Long id) {
        return mapper.toProductDTO(repository.findById(id).orElseThrow(() -> new NotFoundException("product does not exist")));
    }


    @Override
    public ProductPage getProductByCategoryId(Long id, Integer page) {
        page = page >= 1 ? page - 1 : page;
        Pageable pageable = PageRequest.of(page, 8);
        Page<Product> productPage = repository.findByCategoryId(id, pageable);

        List<ProductDTO> products = productPage
                .getContent()
                .stream().map(mapper::toProductDTO)
                .collect(Collectors.toList());
        return ProductPage.builder()
                .totalPages(productPage.getTotalPages())
                .totalElements(productPage.getTotalElements())
                .products(products)
                .build();
    }

    @Override
    @Transactional
    public ProductDTO createNewProduct(CreateOrUpdateRequest request) {
        Category category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() -> new NotFoundException("Category not found"));
        Product product = Product.builder()
                .name(request.getName())
                .price(request.getPrice())
                .category(category)
                .build();
        List<Image> images = request.getImages()
                .stream()
                .map(image ->
                        Image.builder()
                                .product(product)
                                .src(image)
                                .build()
                )
                .collect(Collectors.toList());
        List<ProductVariant> variants = request.getVariants()
                .stream()
                .map(variant -> {
                            ProductVariant v = ProductVariant.builder()
                                    .product(product)
                                    .color(variant.getColor())
                                    .size(variant.getSize())
                                    .build();
                            for (Image image : images) {
                                String unicodeColor = this.removeVietnameseDiacritics(v.getColor());
                                boolean isMatch = image.getSrc().toLowerCase().contains(unicodeColor);
                                if (isMatch) {
                                    v.setImage(image);
                                    break;
                                }
                            }
                            ;
                            return v;
                        }
                )
                .collect(Collectors.toList());
        product.setVariants(variants);
        product.setImages(images);
        return mapper.toProductDTO(repository.save(product));
    }

    public String removeVietnameseDiacritics(String str) {
        String normalizedString = Normalizer.normalize(str, Normalizer.Form.NFD);
        Pattern pattern = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");
        return pattern.matcher(normalizedString).replaceAll("").toLowerCase().replaceAll("đ", "d");
    }

    @Override
    @Transactional
    public void deleteProduct(Long id) {
        Product product = repository.findById(id).orElseThrow(() -> new NotFoundException("product does not exist"));
        List<Image> images = product.getImages();
        List<OrderItem> orderItems = orderItemRepository.findByProductId(product.getId());
        images.forEach(image -> {
            String imgSrc = image.getSrc();
            int idx = imgSrc.lastIndexOf("/");
            String imgName = imgSrc.substring(idx);
            String uri = this.uploadFolder + File.separator + imgName;
            new File(uri).delete();
        });
        orderItemRepository.deleteAll(orderItems);
        imageRepository.deleteAll(images);
        repository.delete(product);
    }

    @Override
    public ProductDTO updateProduct(Long id, CreateOrUpdateRequest request) {
        Product product = repository.findById(id).orElseThrow(() -> new NotFoundException("product does not exist"));
        if ((request.getImages() != null && !request.getImages().isEmpty())) {
            List<Image> images = request.getImages()
                    .stream()
                    .map(image ->
                            Image.builder()
                                    .product(product)
                                    .src(image)
                                    .build()

                    )
                    .collect(Collectors.toList());
            product.setImages(images);
        }
        if (request.getVariants() != null && !request.getVariants().isEmpty()) {
            List<ProductVariant> variants = request.getVariants()
                    .stream()
                    .map(variant ->
                            ProductVariant.builder()
                                    .product(product)
                                    .color(variant.getColor())
                                    .size(variant.getSize())
                                    .build()
                    )
                    .collect(Collectors.toList());
            product.setVariants(variants);
        }
        if (request.getCategoryId() != null) {
            Category category = categoryRepository.findById(request.getCategoryId()).orElseThrow(() -> new NotFoundException("category does not exist"));
            product.setCategory(category);
        }
        if (request.getName() != null) product.setName(request.getName());
        if (request.getPrice() != null) product.setPrice(request.getPrice());

        return mapper.toProductDTO(repository.save(product));
    }

    @Override
    public ProductDTO getProductByVariantId(Long variantId) {
        ProductVariant variant = variantRepository.findById(variantId).orElseThrow(() -> new NotFoundException("variant does not exist"));
        Product product = variant.getProduct();
        return mapper.toProductDTO(product);
    }
}
