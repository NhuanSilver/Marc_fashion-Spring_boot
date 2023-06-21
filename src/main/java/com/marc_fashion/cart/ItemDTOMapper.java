package com.marc_fashion.cart;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ItemDTOMapper {
    private final ModelMapper modelMapper;
    public ItemDTO toDTO(Item item){
        ItemDTO i = modelMapper.map(item, ItemDTO.class);
        i.setVariantId(item.getVariant().getId());
        return i;
    }
}
