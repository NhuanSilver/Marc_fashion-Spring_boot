package com.marc_fashion.search;

import com.marc_fashion.product.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class ServiceService implements ISearchService {
    private final ProductDTOMapper mapper;
    private final ProductRepository productRepository;

    @Override
    public ProductPage filterProduct(FilterRequest filterRequest) {
        Pageable pageable;
        int pageSize = 8;
        int page = filterRequest.getPage() >= 1 ? filterRequest.getPage() - 1 : filterRequest.getPage();
        SortType sortType = filterRequest.getType();
        switch (sortType) {
            case NAME_ASC -> pageable = PageRequest.of(page, pageSize, Sort.by("name").ascending());
            case NAME_DESC -> pageable = PageRequest.of(page, pageSize, Sort.by("name").descending());
            case PRICE_DESC -> pageable = PageRequest.of(page, pageSize, Sort.by("price").descending());
            case PRICE_ASC -> pageable = PageRequest.of(page, pageSize, Sort.by("price").ascending());
            default -> pageable = PageRequest.of(page, pageSize);

        }

        Specification<Product> specification = Specification
                .where(FilterSpecification.isInCateIds(filterRequest.getCategoryIds())
                        .and(FilterSpecification.isInColors(filterRequest.getColors())
                                .and(FilterSpecification.isInSizes(filterRequest.getSizes()))));
        Page<Product> pageProduct = this.productRepository.findAll(specification, pageable);

        List<ProductDTO> products = pageProduct
                .getContent()
                .stream().map(mapper::toProductDTO)
                .collect(Collectors.toList());
        return ProductPage.builder()
                .totalPages(pageProduct.getTotalPages())
                .totalElements(pageProduct.getTotalElements())
                .products(products)
                .build();
    }

    @Override
    public ProductPage searchByProductName(String name, Integer page) {
        page = page >= 1 ? page - 1 : page;
        Pageable pageable = PageRequest.of(page, 8);
        Page<Product> productPage = productRepository.findByNameIgnoreCaseContaining(name, pageable);
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
}
