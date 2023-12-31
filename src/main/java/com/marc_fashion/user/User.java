package com.marc_fashion.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User implements UserDetails {
    @Id
    @Column(length = 50)
    private String username;
    @Column(nullable = false, length = 100)
    private String password;
    @Column(nullable = false, length = 30)
    private String firstName;
    @Column(nullable = false, length = 30)
    private String lastName;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_role",joinColumns = @JoinColumn(name = "username"), inverseJoinColumns =  @JoinColumn(name = "role"))
    private Set<Role> roles;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();
        roles.forEach(role -> authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getName())));
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
