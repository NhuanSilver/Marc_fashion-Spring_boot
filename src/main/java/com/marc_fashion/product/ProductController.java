package com.marc_fashion.product;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/v1/products")
@RequiredArgsConstructor
public class ProductController {
    private final IProductService productService;

    @GetMapping
    public ProductPage getAllProduct(@RequestParam(defaultValue = "1") Integer page) {
        return this.productService.getAllProduct(page);
    }

    @GetMapping("/category/{id}")
    public ProductPage getProductByCategoryId(@PathVariable Long id, @RequestParam(defaultValue = "1") Integer page ) {
        return productService.getProductByCategoryId(id, page);
    }

    @GetMapping("/{id}")
    public ProductDTO getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @GetMapping("/variant/{id}")
    public ProductDTO getProductByVariantId(@PathVariable Long id) {
        return productService.getProductByVariantId(id);
    }

    @PostMapping
    public ProductDTO createNewProduct(@RequestBody CreateOrUpdateRequest request) {
        return productService.createNewProduct(request);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ProductDTO updateProduct(@PathVariable Long id, @RequestBody CreateOrUpdateRequest updateRequest) {
        return productService.updateProduct(id, updateRequest);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }
}
