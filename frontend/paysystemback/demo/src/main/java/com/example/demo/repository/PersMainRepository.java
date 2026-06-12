package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.PersMain;

@Repository
public interface PersMainRepository extends JpaRepository<PersMain, Long> {

    Optional<PersMain> findByPersNoAndIdNumber(
            Long persNo,
            String idNumber
    );
}