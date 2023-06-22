package com.marc_fashion.product;

import java.util.List;

public interface IProductService {
    List<ProductDTO> getAllProduct();
    ProductDTO getProductById(Long id);

    List<ProductDTO> getProductByCategoryId(Long id);

    ProductDTO createNewProduct(CreateOrUpdateRequest request);
    void deleteProduct(Long id);
    ProductDTO updateProduct(Long id, CreateOrUpdateRequest request);
    ProductDTO getProductByVariantId(Long variantId);
}
