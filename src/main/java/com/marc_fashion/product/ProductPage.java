package com.marc_fashion.product;

import lombok.Builder;
import lombok.Data;

import java.util.List;
@Data
@Builder
public class ProductPage {
    private int totalPages;
    private long totalElements;
    private List<ProductDTO> products;
}
