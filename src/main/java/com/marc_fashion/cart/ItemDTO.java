package com.marc_fashion.cart;

import com.marc_fashion.product.ProductDTO;
import lombok.Data;

@Data
public class ItemDTO {
    private Long id;
    private Long variantId;
    private Integer quantity;
}
