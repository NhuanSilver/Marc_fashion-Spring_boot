package com.marc_fashion.cart;

public interface ICartService {
    CartDTO addToCart(AddToCartRequest request);
    ItemDTO plus(Long itemId, Integer quantity);
    ItemDTO minus(Long itemId, Integer quantity);
    void removeItem(Long itemId);

    CartDTO getCartByCurrentUser();
}
