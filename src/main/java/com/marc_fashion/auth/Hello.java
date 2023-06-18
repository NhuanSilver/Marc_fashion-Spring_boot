package com.marc_fashion.auth;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Hello {
    @GetMapping("/auth/hello")
    public String hello(){
        return "secure endpoint";
    }
}
