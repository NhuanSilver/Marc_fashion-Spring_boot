package com.marc_fashion.cart;

import com.marc_fashion.product.ProductDTO;
import com.marc_fashion.product.ProductVariantDTO;
import lombok.Data;

@Data
public class CartItemDTO {
    private Long id;
    private ProductVariantDTO variant;
    private ProductDTO product;
    private Integer quantity;
}
