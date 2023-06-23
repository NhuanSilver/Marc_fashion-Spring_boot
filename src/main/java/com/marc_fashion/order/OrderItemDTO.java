package com.marc_fashion.order;

import com.marc_fashion.product.ProductDTO;
import com.marc_fashion.product.ProductVariantDTO;
import lombok.Data;

@Data
public class OrderItemDTO {
    private Long id;
    private ProductVariantDTO variant;
    private ProductDTO product;
    private Integer quantity;

}
