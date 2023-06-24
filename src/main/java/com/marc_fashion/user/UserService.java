package com.marc_fashion.user;

import com.marc_fashion.auth.AuthenticationResponse;
import com.marc_fashion.auth.LoginRequest;
import com.marc_fashion.auth.RegistrationRequest;
import com.marc_fashion.auth.JwtService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserService implements IUserService {


}
