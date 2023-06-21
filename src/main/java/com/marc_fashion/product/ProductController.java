package com.marc_fashion.product;

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
    @GetMapping("/{id}")
    public ProductDTO getProductById(@PathVariable Long id){
        return productService.getProductById(id);
    }
    @PostMapping
    public ProductDTO createNewProduct(@RequestBody CreateOrUpdateRequest request){
        return productService.createNewProduct(request);
    }
    @PutMapping("/{id}")
    public ProductDTO updateProduct(@PathVariable Long id, @RequestBody CreateOrUpdateRequest updateRequest){
        return productService.updateProduct(id, updateRequest);
    }
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id){
         productService.deleteProduct(id);
    }
}
