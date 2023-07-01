package com.marc_fashion.order;

import com.marc_fashion.product.Product;
import com.marc_fashion.product.ProductVariant;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private Integer quantity;
    @ManyToOne
    private Product product;
    @ManyToOne
    private ProductVariant variant;
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    private Timestamp createdAt;
    private Timestamp lastUpdated;

    @PrePersist
    protected void onCreate() {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        createdAt = timestamp;
        lastUpdated = timestamp;
    }

    @PreUpdate
    protected void onUpdate() {
        lastUpdated = new Timestamp(System.currentTimeMillis());
    }
}
