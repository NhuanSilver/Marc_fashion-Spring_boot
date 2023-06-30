package com.marc_fashion.user;

import lombok.Data;

import java.util.Set;

@Data
public class UserUpdateRequest {
    private String firstName;
    private String lastName;
    private String password;
    private Set<String> roles;
}
