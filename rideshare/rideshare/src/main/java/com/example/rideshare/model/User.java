package com.example.rideshare.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users") // ✅ Avoid using reserved word "user"
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;

    private String password;

    private String role;

    private String country;
}
