package com.marc_fashion.product;

import com.marc_fashion.category.Category;
import com.marc_fashion.category.CategoryRepository;
import com.marc_fashion.exception.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService implements IProductService {
    private final ProductRepository repository;
    private final CategoryRepository categoryRepository;
    private final ProductVariantRepository variantRepository;
    private final ImageRepository imageRepository;
    private final ProductDTOMapper mapper;

    @Override
    public List<ProductDTO> getAllProduct() {
        List<Product> products = repository.findAll();

        return products
                .stream()
                .map(mapper::toProductDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ProductDTO getProductById(Long id) {
        return mapper.toProductDTO(repository.findById(id).orElseThrow(()->new NotFoundException("product does not exist")));
    }


    @Override
    public List<ProductDTO> getProductByCategoryId(Long id) {
        List<Product> products = repository.findByCategoryId(id);

        return products
                .stream()
                .map(mapper::toProductDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public ProductDTO createNewProduct(CreateOrUpdateRequest request) {
        Category category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(()-> new NotFoundException("Category not found"));
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
                .map(variant ->
                        ProductVariant.builder()
                                .product(product)
                                .color(variant.getColor())
                                .size(variant.getSize())
                                .build()
                )
                .collect(Collectors.toList());
        product.setVariants(variants);
        product.setImages(images);
        return mapper.toProductDTO(repository.save(product));
    }

    @Override
    @Transactional
    public void deleteProduct(Long id) {
        Product product = repository.findById(id).orElseThrow(()->new NotFoundException("product does not exist"));
        imageRepository.deleteAll(product.getImages());
        repository.delete(product);
    }

    @Override
    public ProductDTO updateProduct(Long id, CreateOrUpdateRequest request) {
        Product product = repository.findById(id).orElseThrow(()->new NotFoundException("product does not exist"));
        if ((request.getImages() != null && !request.getImages().isEmpty())){
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
        if (request.getVariants() != null && !request.getVariants().isEmpty()){
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
        if (request.getCategoryId() != null){
            Category category = categoryRepository.findById(request.getCategoryId()).orElseThrow(()->new NotFoundException("category does not exist"));
            product.setCategory(category);
        }
        if (request.getName() != null) product.setName(request.getName());
        if (request.getPrice() != null) product.setPrice(request.getPrice());

        return mapper.toProductDTO(repository.save(product));
    }

    @Override
    public ProductDTO getProductByVariantId(Long variantId) {
        ProductVariant variant = variantRepository.findById(variantId).orElseThrow(()->new NotFoundException("variant does not exist"));
        Product product = variant.getProduct();
        return mapper.toProductDTO(product);
    }
}
