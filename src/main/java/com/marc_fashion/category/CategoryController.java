package com.marc_fashion.category;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/categories")
@RequiredArgsConstructor
public class CategoryController {
    private final ICategoryService categoryService;
    @GetMapping
    public List<Category> getAllCategory(){
        return categoryService.getAll();
    }
    @GetMapping("/{id}")
    public Category getCategoryById(@PathVariable Long id){
        return this.categoryService.getCategoryById(id);
    }
}
