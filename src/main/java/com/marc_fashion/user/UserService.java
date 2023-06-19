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
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final UserMapper userMapper;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    @Override
    public AuthenticationResponse login(LoginRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByUsername(request.getUsername())
                .orElseThrow();
        List<String> authorities = user.getAuthorities()
                .stream()
                .map(simpleAuthority -> simpleAuthority.getAuthority())
                .collect(Collectors.toList());
        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        return AuthenticationResponse.builder()
                .username(user.getUsername())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .token(jwtToken)
                .refreshToken(refreshToken)
                .authorities(authorities)
                .build();
    }

    @Override
    public UserDTO register(RegistrationRequest request) {
        Role roleUser = roleRepository.findByName("USER").orElseThrow();
        User user = User.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .roles(List.of(roleUser))
                .build();
        return userMapper.toDTO(userRepository.save(user));
    }
}
