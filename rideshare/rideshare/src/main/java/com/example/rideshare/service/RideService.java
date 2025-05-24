package com.example.rideshare.service;

import com.example.rideshare.model.RideRequest;
import com.example.rideshare.repository.RideRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RideService {

    private static final double RWF_PER_KM = 1500;

    @Autowired
    private RideRequestRepository rideRequestRepository;

    public double calculateFare(double distanceKm) {
        return Math.round(distanceKm * RWF_PER_KM);
    }

    public RideRequest saveRide(RideRequest request) {
        return rideRequestRepository.save(request);
    }
}
