package com.example.rideshare.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
          .cors().and() // Enable CORS
          .csrf(csrf -> csrf.disable()) // disable CSRF for testing (be careful)
          .authorizeHttpRequests(auth -> auth
              .requestMatchers("/api/admin/**").hasRole("ADMIN")
              .anyRequest().authenticated()
          )
          .formLogin() // configure form login
          .and() // add this to return to the HttpSecurity object
          .httpBasic(); // configure HTTP basic authentication
        return http.build();
    }
}
