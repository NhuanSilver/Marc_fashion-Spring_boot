package com.marc_fashion.auth;

import com.marc_fashion.exception.InvalidException;
import com.marc_fashion.exception.NotFoundException;
import com.marc_fashion.user.*;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class AuthenticationService implements IAuthenticationService{
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
        User user = userRepository.findById(request.getUsername())
                .orElseThrow();
        List<String> authorities = user.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());
        String jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        return AuthenticationResponse.builder()
                .username(user.getUsername())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .authorities(authorities)
                .build();
    }

    @Override
    public UserDTO register(RegistrationRequest request) {
        boolean isUsernameExist = userRepository.existsById(request.getUsername());
        if (isUsernameExist) throw new InvalidException("username is existed");
        Role roleUser = roleRepository.findById("ADMIN").orElseThrow(()-> new NotFoundException("role not found"));
        User user = User.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .roles(Set.of(roleUser))
                .build();
        return userMapper.toDTO(userRepository.save(user));
    }

    @Override
    public String refreshToken(HttpServletRequest request) {
        final String authorizeHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (authorizeHeader != null && authorizeHeader.startsWith("Bearer ")){
            final String refreshToken = authorizeHeader.substring(7);
            final String username = jwtService.extractUsername(refreshToken);
            if(username != null){
                User user = userRepository.findById(username).orElseThrow();
                if(jwtService.isTokenValid(refreshToken, user)){
                    return  jwtService.generateToken(user);
                }
            }
        }
        throw new InvalidException("invalid refresh token");
    }
}
