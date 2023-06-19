package com.marc_fashion.category;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService implements ICategoryService{
    private final CategoryRepository repository;
    @Override
    public List<Category> getAll() {
        return repository.findAll();
    }
}
