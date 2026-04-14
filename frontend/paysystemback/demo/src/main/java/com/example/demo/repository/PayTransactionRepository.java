package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.PayTransaction;

public interface PayTransactionRepository 
        extends JpaRepository<PayTransaction, Long> {
}