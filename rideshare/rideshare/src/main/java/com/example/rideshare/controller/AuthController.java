package com.example.rideshare.controller;

import com.example.rideshare.model.User;
import com.example.rideshare.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserService userService;

@PostMapping("/signup")
public Map<String, Object> signup(@RequestBody User user) {
    Map<String, Object> res = new HashMap<>();
    try {
        userService.register(user);
        res.put("success", true);
    } catch (Exception e) {
        res.put("success", false);
        res.put("error", e.getMessage());
        e.printStackTrace();  // log stack trace for debugging
    }
    return res;
}



    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody User user) {
        Map<String, Object> res = new HashMap<>();
        userService.login(user.getEmail(), user.getPassword()).ifPresentOrElse(
            u -> {
                // Simulate sending a 2FA code
                String twoFactorCode = "123456"; // This should be generated and sent to the user
                res.put("success", true);
                res.put("user", u);
                res.put("twoFactorCode", twoFactorCode);
            },
            () -> res.put("success", false)
        );
        return res;
    }
}
