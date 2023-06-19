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
        List<ProductVariantDTO> variantDTOs = product.getVariants()
                .stream()
                .map(productVariant -> modelMapper.map(productVariant, ProductVariantDTO.class))
                .collect(Collectors.toList());
        List<ImageDTO> imageDTOS = product.getImages()
                .stream()
                .map(image -> modelMapper.map(image, ImageDTO.class))
                .collect(Collectors.toList());
        ProductDTO productDTO = modelMapper.map(product, ProductDTO.class);
        productDTO.setVariants(variantDTOs);
        productDTO.setImages(imageDTOS);
        return productDTO;
    }
}
