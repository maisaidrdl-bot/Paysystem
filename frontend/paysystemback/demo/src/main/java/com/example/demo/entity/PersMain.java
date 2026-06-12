package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "PERSMAIN" ,schema = "SYSTEM")
public class PersMain {

    @Id
    @Column(name = "PERSNO")
    private Long persNo;

    @Column(name = "IDNUMBER")
    private String idNumber;

    public PersMain() {
    }

    public Long getPersNo() {
        return persNo;
    }

    public void setPersNo(Long persNo) {
        this.persNo = persNo;
    }

    public String getIdNumber() {
        return idNumber;
    }

    public void setIdNumber(String idNumber) {
        this.idNumber = idNumber;
    }
}