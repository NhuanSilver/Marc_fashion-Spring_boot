package com.marc_fashion.search;

import com.marc_fashion.search.SortType;
import lombok.Data;

import java.util.List;

@Data
public class FilterRequest {
    private List<String> colors;
    private List<String> sizes;
    private int page = 1;
    private List<Long> categoryIds;
    private SortType type = SortType.DEFAULT;
}
