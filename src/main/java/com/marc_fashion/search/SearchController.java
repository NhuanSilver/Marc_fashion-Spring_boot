package com.marc_fashion.search;

import com.marc_fashion.product.ProductPage;
import lombok.RequiredArgsConstructor;
import org.modelmapper.internal.bytebuddy.implementation.bind.annotation.Default;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/search")
@RequiredArgsConstructor
public class SearchController {
    private final   ISearchService searchService;
    @GetMapping("/filter")
    public ProductPage filterProduct(FilterRequest filterRequest){
        return searchService.filterProduct(filterRequest);
    }
    @GetMapping
    public ProductPage searchByProductName(@RequestParam String name,@RequestParam(defaultValue = "1") Integer page){
        return this.searchService.searchByProductName(name, page);
    }
}
