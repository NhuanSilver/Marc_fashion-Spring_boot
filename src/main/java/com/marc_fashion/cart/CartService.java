package com.marc_fashion.cart;
import com.marc_fashion.product.ProductVariant;
import com.marc_fashion.product.ProductVariantRepository;
import com.marc_fashion.user.User;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@RequiredArgsConstructor
public class CartService implements ICartService {
    private final CartRepository cartRepository;
    private final ItemRepository itemRepository;
    private final CartDTOMapper cartDTOMapper;
    private final ProductVariantRepository variantRepository;
    private final ItemDTOMapper itemDTOMapper;


    @Override
    @Transactional
    public CartDTO addToCart(AddToCartRequest request) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        ProductVariant variant = variantRepository.findById(request.getVariantId()).orElseThrow();
        Cart cart = cartRepository.findByUserId(user.getId()).orElse(null);
        if (cart != null) {
            Item item = cart.getItems()
                    .stream()
                    .filter(i -> i.getVariant().getId().equals(request.getVariantId()))
                    .findFirst().orElse(null);
            if (item != null) {
                item.setQuantity(item.getQuantity() + request.getQuantity());
            } else {
                item = Item.builder()
                        .variant(variant)
                        .quantity(request.getQuantity())
                        .cart(cart)
                        .build();
                cart.getItems().add(item);
            }
        } else {
            Item item = Item.builder()
                    .variant(variant)
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
    public ItemDTO plus(Long itemId, Integer quantity) {
        Item item = itemRepository.findById(itemId).orElseThrow();
        item.setQuantity(item.getQuantity() + quantity);
        return itemDTOMapper.toDTO(itemRepository.save(item));
    }

    @Override
    public ItemDTO minus(Long itemId, Integer quantity) {
        Item item = itemRepository.findById(itemId).orElseThrow();
        Integer qty = item.getQuantity();
        if (qty - quantity <= 0) throw new RuntimeException();
        item.setQuantity(qty - quantity);
        return itemDTOMapper.toDTO(itemRepository.save(item));
    }

    @Override
    public void removeItem(Long itemId) {
       boolean isExist = itemRepository.existsById(itemId);
       if (!isExist) throw new RuntimeException();
       itemRepository.deleteById(itemId);
    }

    @Override
    public CartDTO getCartByCurrentUser() {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Cart cart = cartRepository.findByUserId(user.getId()).orElse(null);
        if (cart != null) return cartDTOMapper.toDTO(cart);
        return null;
    }
}
