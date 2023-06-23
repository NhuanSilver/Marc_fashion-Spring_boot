package com.marc_fashion.order;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class OrderItemDTOMapper {
    private final ModelMapper mapper;
    public OrderItemDTO toDTO(OrderItem item){
        return this.mapper.map(item, OrderItemDTO.class);
    }
}
