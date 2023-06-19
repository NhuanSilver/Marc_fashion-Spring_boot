package com.marc_fashion.auth;

import lombok.Data;

@Data
public class RegistrationRequest {
    private String firstName;
    private String lastName;
    private String username;
    private String password;
}
