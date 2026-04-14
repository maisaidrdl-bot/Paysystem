package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.PayEntryDTO;
import com.example.demo.service.PayTransactionService;

@RestController
@RequestMapping("/api/pay")
@CrossOrigin(origins = "http://localhost:5173")
public class PayTransactionController {

    @Autowired
    private PayTransactionService service;

    @PostMapping("/save")
    public String save(@RequestBody PayEntryDTO dto) {
        service.saveEntry(dto);
        return "Saved Successfully";
    }
}