package com.marc_fashion.product;

import com.marc_fashion.search.FilterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/products")
@RequiredArgsConstructor
public class ProductController {
    private final IProductService productService;
    @GetMapping
    public List<ProductDTO> getAllProduct(){
        return this.productService.getAllProduct();
    }
    @GetMapping("/category/{id}")
    public List<ProductDTO> getProductByCategoryId(@PathVariable Long id){
        return productService.getProductByCategoryId(id);
    }
}
