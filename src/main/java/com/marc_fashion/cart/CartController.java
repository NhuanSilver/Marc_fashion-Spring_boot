package com.marc_fashion.cart;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/carts")
@RequiredArgsConstructor
public class CartController {
    private final ICartService cartService;
    @GetMapping("/user")
    public CartDTO getCartByCurrentUser(){
        return cartService.getCartByCurrentUser();
    }

    @PostMapping
    public CartDTO addToCart(@RequestBody AddToCartRequest request){
       return this.cartService.addToCart(request);
    }
    @PutMapping("/item/{id}/plus")
    public ItemDTO plusItemQuantity(@PathVariable Long id, @RequestParam Integer quantity){
        return cartService.plus(id, quantity);
    }
    @PutMapping("/item/{id}/minus")
    public ItemDTO minusItemQuantity(@PathVariable Long id, @RequestParam Integer quantity){
        return cartService.minus(id, quantity);
    }
    @DeleteMapping("/item/{id}")
    public void deleteItem(@PathVariable Long id){
        cartService.removeItem(id);
    }
}
