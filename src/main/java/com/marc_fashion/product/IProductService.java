package com.marc_fashion.product;

import org.springframework.data.domain.Page;

import java.util.List;

public interface IProductService {
    ProductPage getAllProduct(Integer page);
    ProductDTO getProductById(Long id);

    ProductPage getProductByCategoryId(Long id, Integer page);

    ProductDTO createNewProduct(CreateOrUpdateRequest request);
    void deleteProduct(Long id);
    ProductDTO updateProduct(Long id, CreateOrUpdateRequest request);
    ProductDTO getProductByVariantId(Long variantId);
}
