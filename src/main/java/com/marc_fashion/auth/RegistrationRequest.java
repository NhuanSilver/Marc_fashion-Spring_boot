package com.marc_fashion.auth;

import lombok.Data;

@Data
public class RegistrationRequest {
    private String fullName;
    private String username;
    private String password;
}
