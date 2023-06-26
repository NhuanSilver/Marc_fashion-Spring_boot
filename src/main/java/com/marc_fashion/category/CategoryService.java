package com.marc_fashion.category;

import com.marc_fashion.exception.NotFoundException;
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

    @Override
    public Category getCategoryById(Long id) {
        Category category = this.repository.findById(id).orElseThrow(()-> new NotFoundException("category does not exist"));
        return category;
    }
}
