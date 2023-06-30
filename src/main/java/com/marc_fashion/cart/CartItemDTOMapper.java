package com.marc_fashion.cart;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CartItemDTOMapper {
    private final ModelMapper modelMapper;
    public CartItemDTO toDTO(CartItem item){
        return modelMapper.map(item, CartItemDTO.class);
    }
}
