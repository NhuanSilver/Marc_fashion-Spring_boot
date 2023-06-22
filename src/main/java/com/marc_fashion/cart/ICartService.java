package com.marc_fashion.cart;

import java.util.List;

public interface ICartService {
    List<ItemDTO> addToCart(AddToCartRequest request);
    ItemDTO plus(Long itemId, Integer quantity);
    ItemDTO minus(Long itemId, Integer quantity);
    void removeItem(Long itemId);

    List<ItemDTO> getCartByCurrentUser();
}
