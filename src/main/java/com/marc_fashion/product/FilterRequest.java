package com.marc_fashion.product;

import lombok.Data;

@Data
public class FilterRequest {
    private String color;
    private String size;
    private int page;
    private String category;
}
