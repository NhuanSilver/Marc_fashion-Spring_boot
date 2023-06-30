package com.marc_fashion.user;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class UserMapper {
    private final ModelMapper modelMapper;
    public UserDTO toDTO(User user){
        return this.modelMapper.map(user, UserDTO.class);
    }

}
