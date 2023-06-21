package com.marc_fashion.product;

import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class CreateOrUpdateRequest {
    private String name;
    private Long categoryId;
    private BigDecimal price;
    private List<ProductVariantCreationRequest> variants;
    private List<String> images;
}
