package com.example.rideshare.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "rides")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Ride {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String pickupLocation;

    private String dropoffLocation;

    private double fare;

    private String status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

} 