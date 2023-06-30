package com.marc_fashion.cart;

public interface ICartService {
    CartDTO addToCart(AddToCartRequest request);
    CartItemDTO plus(Long itemId, Integer quantity);
    CartItemDTO minus(Long itemId, Integer quantity);
    void removeItem(Long itemId);

    CartDTO getCartByCurrentUser();
}
