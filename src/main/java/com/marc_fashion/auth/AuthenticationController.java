package com.marc_fashion.auth;

import com.marc_fashion.user.UserDTO;
import com.marc_fashion.user.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class AuthenticationController {

    private final IAuthenticationService authenticationService;
    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody LoginRequest request){
        return authenticationService.login(request);
    }
    @PostMapping("/register")
    public UserDTO register(@RequestBody RegistrationRequest request){
        return authenticationService.register(request);
    }

}
