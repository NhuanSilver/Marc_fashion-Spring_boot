package com.marc_fashion.user;

import com.marc_fashion.user.User;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Role {
    @Id
    @Column(length = 20)
    private String name;
    @ManyToMany(mappedBy = "roles")
    private List<User> users;
}
