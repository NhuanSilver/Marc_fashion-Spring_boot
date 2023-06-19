package com.marc_fashion.product;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String src;
    @OneToMany(mappedBy = "image")
    private List<ProductVariant> variant;
    @ManyToOne
    private Product product;
}
