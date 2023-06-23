package com.marc_fashion.product;

import lombok.Data;

@Data
public class ProductVariantDTO {
    private Long id;
    private String color;
    private String size;
    private ImageDTO image;
}
