package com.marc_fashion.order;

import com.marc_fashion.product.Product;
import com.marc_fashion.product.ProductVariant;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer quantity;
    @ManyToOne
    private Product product;
    @ManyToOne
    private ProductVariant variant;
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;


}
