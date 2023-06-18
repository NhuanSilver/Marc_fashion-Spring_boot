package com.marc_fashion.auth;

import com.marc_fashion.auth.AuthenticationResponse;
import com.marc_fashion.auth.LoginRequest;
import com.marc_fashion.auth.RegistrationRequest;
import com.marc_fashion.user.UserDTO;
import com.marc_fashion.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class AuthenticationController {

    private final UserService userService;
    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody LoginRequest request){
        return userService.login(request);
    }
    @PostMapping("/register")
    public UserDTO register(@RequestBody RegistrationRequest request){
        return userService.register(request);
    }

}
