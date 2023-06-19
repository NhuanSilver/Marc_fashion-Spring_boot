package com.marc_fashion.product;

import com.marc_fashion.search.FilterRequest;
import com.marc_fashion.search.FilterSpecification;
import com.marc_fashion.search.SortType;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService implements IProductService {
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
    public List<ProductDTO> getProductByCategoryId(Long id) {
        List<Product> products = repository.findByCategoryId(id);

        return products
                .stream()
                .map(mapper::toProductDTO)
                .collect(Collectors.toList());
    }
}
