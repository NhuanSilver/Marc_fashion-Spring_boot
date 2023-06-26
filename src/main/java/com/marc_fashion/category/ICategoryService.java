package com.marc_fashion.category;

import java.util.List;

public interface ICategoryService {
    List<Category> getAll();

    Category getCategoryById(Long id);
}
