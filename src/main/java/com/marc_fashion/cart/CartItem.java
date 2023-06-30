package com.marc_fashion.cart;

import com.marc_fashion.product.Product;
import com.marc_fashion.product.ProductVariant;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer quantity;
    @ManyToOne
    private ProductVariant variant;
    @ManyToOne
    private Product product;
    @ManyToOne
    private Cart cart;
}
