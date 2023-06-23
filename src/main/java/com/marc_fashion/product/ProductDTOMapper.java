package com.marc_fashion.product;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class ProductDTOMapper {
    private final ModelMapper modelMapper;
    public ProductDTO toProductDTO(Product product){
        return modelMapper.map(product, ProductDTO.class);
    }
}
