package com.marc_fashion.user;

import com.marc_fashion.auth.AuthenticationResponse;
import com.marc_fashion.auth.LoginRequest;
import com.marc_fashion.auth.RegistrationRequest;
import com.marc_fashion.auth.JwtService;
import com.marc_fashion.exception.NotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserService implements IUserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    public List<UserDTO> getAllUser() {
        return userRepository.findAll()
                .stream()
                .map(userMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public UserDTO update(String username, UserUpdateRequest request) {
        User user = userRepository.findById(username).orElseThrow(() -> new NotFoundException("User do not exist"));
        user.setFirstName(request.getFirstName() != null && !request.getFirstName().isEmpty() ? request.getFirstName() : user.getFirstName());
        user.setLastName(request.getLastName() != null && !request.getLastName().isEmpty() ? request.getLastName() : user.getLastName());
        user.setPassword(request.getPassword() != null && !request.getPassword().isEmpty()
                ?passwordEncoder.encode(request.getPassword())
                : passwordEncoder.encode(user.getPassword()));
        if (request.getRoles() != null && !request.getRoles().isEmpty()) {
            Set<Role>  roles = new HashSet<>();
            request.getRoles().forEach(role -> {
                roles.add(roleRepository.findById(role).orElseThrow(() -> new NotFoundException("Role do not exist")));
            });
            user.setRoles(roles);
        }
        return userMapper.toDTO(userRepository.save(user));
    }

    @Override
    public void delete(String username) {
        User user = userRepository.findById(username).orElseThrow( () -> new NotFoundException("User do not exist"));
        user.setRoles(new HashSet<>());
        userRepository.delete(user);
    }
}
