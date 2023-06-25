package com.marc_fashion.search;

import com.marc_fashion.product.ProductPage;

public interface ISearchService {
    ProductPage filterProduct(FilterRequest filterRequest);

    ProductPage searchByProductName(String name, Integer page);
}
