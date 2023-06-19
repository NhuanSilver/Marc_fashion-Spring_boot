package com.marc_fashion.product;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService implements IProductService{
    private final ProductRepository repository;
    private final ProductDTOMapper mapper;
    @Override
    public List<ProductDTO> getAllProduct() {
        List<Product> products = repository.findAll();

        return products
                .stream()
                .map(mapper::toProductDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ProductDTO getProductById(Long id) {
        return mapper.toProductDTO(repository.findById(id).orElseThrow());
    }

    @Override
    public ProductDTO filterProduct(FilterRequest filterRequest) {
        return null;
    }

    @Override
    public List<ProductDTO> getProductByCategoryId(Long id) {
        List<Product> products = repository.findByCategoryId(id);

        return products
                .stream()
                .map(mapper::toProductDTO)
                .collect(Collectors.toList());
    }
}
