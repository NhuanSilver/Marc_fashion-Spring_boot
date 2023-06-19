package com.marc_fashion.product;

import com.marc_fashion.search.FilterRequest;

import java.util.List;

public interface IProductService {
    List<ProductDTO> getAllProduct();
    ProductDTO getProductById(Long id);

    List<ProductDTO> getProductByCategoryId(Long id);
}
