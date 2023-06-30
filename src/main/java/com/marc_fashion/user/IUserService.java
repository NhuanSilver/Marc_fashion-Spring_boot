package com.marc_fashion.user;

import com.marc_fashion.auth.AuthenticationResponse;
import com.marc_fashion.auth.LoginRequest;
import com.marc_fashion.auth.RegistrationRequest;

import java.util.List;

public interface IUserService {
    List<UserDTO> getAllUser();

    UserDTO update(String username, UserUpdateRequest request);

    void delete(String username);
}
