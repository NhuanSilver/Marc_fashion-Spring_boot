package com.marc_fashion.order;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class OrderDTOMapper {
    private final ModelMapper modelMapper;
    public OrderDTO toDTO(Order order){
        return modelMapper.map(order,OrderDTO.class);
    }
}