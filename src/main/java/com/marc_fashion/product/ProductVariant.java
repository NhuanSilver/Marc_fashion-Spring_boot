package com.marc_fashion.product;

import com.marc_fashion.image.Image;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductVariant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 20)
    private String color;
    @Column(length = 20)
    private String size;
    @ManyToOne
    private Product product;
    @ManyToOne
    private Image image;
}
