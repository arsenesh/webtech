package com.example.rideshare.controller;

import com.example.rideshare.model.RideRequest;
import com.example.rideshare.service.RideService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class RideController {

    @Autowired
    private RideService rideService;

    @PostMapping("/book")
    public RideRequest bookRide(@RequestBody RideRequest rideRequest) {
        return rideService.saveRide(rideRequest);
    }

    @PostMapping("/fare")
    public Map<String, Object> getFare(@RequestBody Map<String, Double> body) {
        double distance = body.getOrDefault("distance", 0.0);
        double fare = rideService.calculateFare(distance);

        Map<String, Object> res = new HashMap<>();
        res.put("fare", fare);
        return res;
    }
}
