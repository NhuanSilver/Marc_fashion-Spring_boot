package com.marc_fashion.auth;

import com.marc_fashion.user.UserDTO;
import com.marc_fashion.user.UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpRequest;

@RestController
    @RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final IAuthenticationService authenticationService;

    @GetMapping("/validate/{username}")
    public boolean isUsernameExisted(@PathVariable String username) {
        return this.authenticationService.isUsernameExisted(username);
    }
    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody LoginRequest request){
        return authenticationService.login(request);
    }
    @PostMapping("/register")
    public UserDTO register(@RequestBody RegistrationRequest request){
        return authenticationService.register(request);
    }
    @PostMapping("/refresh-token")
    public String refreshToken(HttpServletRequest request){
        return authenticationService.refreshToken(request);
    }

}
