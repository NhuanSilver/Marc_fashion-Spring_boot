package com.marc_fashion.product;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class ProductVariant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String color;
    private String size;
    @ManyToOne
    private Product product;
    @ManyToOne
    private Image image;
}
