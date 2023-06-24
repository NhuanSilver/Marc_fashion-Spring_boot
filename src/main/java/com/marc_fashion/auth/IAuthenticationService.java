package com.marc_fashion.auth;

import com.marc_fashion.user.UserDTO;

public interface IAuthenticationService {
    AuthenticationResponse login(LoginRequest request);
    UserDTO register(RegistrationRequest request);
}
