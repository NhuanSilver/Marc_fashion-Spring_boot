package com.marc_fashion.cart;

import com.marc_fashion.exception.InvalidException;
import com.marc_fashion.exception.NotFoundException;
import com.marc_fashion.product.Product;
import com.marc_fashion.product.ProductVariant;
import com.marc_fashion.product.ProductVariantRepository;
import com.marc_fashion.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@RequiredArgsConstructor
public class CartService implements ICartService {
    private final CartRepository cartRepository;
    private final CartItemRepository itemRepository;
    private final ProductVariantRepository variantRepository;
    private final CartItemDTOMapper itemDTOMapper;
    private final CartDTOMapper cartDTOMapper;


    @Override
    @Transactional
    public CartDTO addToCart(AddToCartRequest request) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(user == null) throw  new NotFoundException("User not found");
        ProductVariant variant = variantRepository.findById(request.getVariantId())
                .orElseThrow( ()-> new NotFoundException("variant not found"));
        Cart cart = cartRepository.findByUserUsername(user.getUsername()).orElse(null);
        Product product = variant.getProduct();
        if (cart != null) {
            CartItem item = cart.getItems()
                    .stream()
                    .filter(i -> i.getVariant().getId().equals(request.getVariantId()))
                    .findFirst().orElse(null);
            if (item != null) {
                item.setQuantity(item.getQuantity() + request.getQuantity());
            } else {
                item = CartItem.builder()
                        .variant(variant)
                        .product(product)
                        .quantity(request.getQuantity())
                        .cart(cart)
                        .build();
                cart.getItems().add(item);
            }
        } else {
            CartItem item = CartItem.builder()
                    .variant(variant)
                    .product(product)
                    .quantity(request.getQuantity())
                    .build();
            cart = Cart.builder()
                    .items(List.of(item))
                    .user(user)
                    .build();
            item.setCart(cart);
        }

        return cartDTOMapper.toDTO(cartRepository.save(cart));

    }

    @Override
    public CartItemDTO plus(Long itemId, Integer quantity) {
        CartItem item = itemRepository.findById(itemId)
                .orElseThrow(() -> new NotFoundException("item not found"));
        item.setQuantity(item.getQuantity() + quantity);
        return itemDTOMapper.toDTO(itemRepository.save(item));
    }

    @Override
    public CartItemDTO minus(Long itemId, Integer quantity) {
        CartItem item = itemRepository.findById(itemId).orElseThrow(() -> new NotFoundException("item not found"));
        Integer qty = item.getQuantity();
        if (qty - quantity <= 0) throw new InvalidException("quantity must not smaller than 1");
        item.setQuantity(qty - quantity);
        return itemDTOMapper.toDTO(itemRepository.save(item));
    }

    @Override
    public void removeItem(Long itemId) {
        boolean isExist = itemRepository.existsById(itemId);
        if (!isExist) throw new NotFoundException("item does not exist");
        itemRepository.deleteById(itemId);
    }

    @Override
    public CartDTO getCartByCurrentUser() {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Cart cart = cartRepository.findByUserUsername(user.getUsername()).orElseThrow(() -> new NotFoundException("cart does not exist"));
        return cartDTOMapper.toDTO(cart);
    }
}
