package com.marc_fashion.auth;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class AuthenticationResponse {
    private String username;
    private String firstName;
    private String lastName;
    private List<String> authorities;
    private String accessToken;
    private String refreshToken;
}
