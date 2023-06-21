package com.marc_fashion.cart;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class CartDTOMapper {
    private final ModelMapper modelMapper;
    public CartDTO toDTO(Cart cart){
        List<ItemDTO> items = cart.getItems()
                .stream()
                .map(item -> {
                    ItemDTO i = modelMapper.map(item, ItemDTO.class);
                    i.setVariantId(item.getVariant().getId());
                    return i;
                })
                .collect(Collectors.toList());
        CartDTO cartDTO = modelMapper.map(cart, CartDTO.class);
        cartDTO.setItems(items);
        return cartDTO;
    }
}
