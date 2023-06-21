package com.marc_fashion.cart;

import lombok.Data;

import java.util.List;

@Data
public class CartDTO {
    private Long id;
    private List<ItemDTO> items;
}
