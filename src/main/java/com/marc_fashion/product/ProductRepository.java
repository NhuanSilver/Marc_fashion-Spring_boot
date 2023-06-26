package com.marc_fashion.product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Page<Product> findByCategoryId(Long id, Pageable pageable);
    Page<Product> findAll(Specification specification, Pageable pageable);
    Page<Product> findByNameIgnoreCaseContaining(String name, Pageable page);
}
