package com.marc_fashion.product;

import java.util.List;

public interface IProductService {
    List<ProductDTO> getAllProduct();
    ProductDTO getProductById(Long id);
    ProductDTO filterProduct(FilterRequest filterRequest);

    List<ProductDTO> getProductByCategoryId(Long id);
}
