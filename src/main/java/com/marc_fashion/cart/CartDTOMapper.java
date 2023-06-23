package com.marc_fashion.cart;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;


@Component
@RequiredArgsConstructor
public class CartDTOMapper {
    private final ModelMapper modelMapper;
    public CartDTO toDTO(Cart cart){
        return this.modelMapper.map(cart, CartDTO.class);
    }
}
