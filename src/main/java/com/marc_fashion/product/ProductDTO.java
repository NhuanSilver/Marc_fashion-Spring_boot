package com.marc_fashion.product;

import lombok.Data;

import java.math.BigDecimal;
import java.util.List;
@Data
public class ProductDTO {
    private Long id;
    private String name;
    private BigDecimal price;
    private List<ImageDTO> images;
    private List<ProductVariantDTO> variants;
}
