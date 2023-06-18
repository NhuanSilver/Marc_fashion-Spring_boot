package com.marc_fashion.auth;

import lombok.Data;

@Data
public class LoginRequest {
    private String username;
    private String password;
}
