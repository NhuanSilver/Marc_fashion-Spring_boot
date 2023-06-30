package com.marc_fashion.auth;

import com.marc_fashion.user.UserDTO;
import jakarta.servlet.http.HttpServletRequest;

import java.net.http.HttpRequest;

public interface IAuthenticationService {
    AuthenticationResponse login(LoginRequest request);
    UserDTO register(RegistrationRequest request);

    AuthenticationResponse refreshToken(HttpServletRequest request);
}
