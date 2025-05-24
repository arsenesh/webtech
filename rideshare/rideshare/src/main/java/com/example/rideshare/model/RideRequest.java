package com.example.rideshare.model;

import jakarta.persistence.*;

@Entity
@Table(name = "ride_requests")
public class RideRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String pickup;
    private String drop;
    private double fare;

    // Getters and Setters
}
