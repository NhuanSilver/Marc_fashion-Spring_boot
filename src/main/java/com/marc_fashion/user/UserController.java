package com.marc_fashion.user;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/v1/admin/users")
@RestController
@RequiredArgsConstructor
public class UserController {
    private final IUserService userService;
    @GetMapping
    public List<UserDTO> getAllUser(){
        return userService.getAllUser();
    }
    @PutMapping("/{username}")
    public UserDTO updateUser(@PathVariable String username, @RequestBody UserUpdateRequest request){
        return userService.update(username,request);
    }
    @DeleteMapping("/{username}")
    public void deleteUser(@PathVariable String username){
        userService.delete(username);
    }
}
