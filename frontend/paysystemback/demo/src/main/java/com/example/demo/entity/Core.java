package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "T_CORE", schema = "SYSTEM")
public class Core {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "core_seq")
    @SequenceGenerator(
        name = "core_seq",
        sequenceName = "CORE_SEQ",
        allocationSize = 1
    )
    @Column(name = "ID")
    private Long id;

    @Column(name = "F_CPERSNO")
    private String persNo;

    @Column(name = "F_CIDNO")
    private String idNo;

    @Column(name = "F_NGPFSUBAMT")
    private Double gpfSubscription;

    @Column(name = "F_NITAX")
    private Double incomeTax;

    @Column(name = "F_NITAXSURCHARGE")
    private Double incomeTaxSurcharge;

    @Column(name = "F_NCCSSUB")
    private Double ccsSubscription;

    @Column(name = "F_NCCSMEMNO")
    private String ccsMemNo;

    public Core() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPersNo() {
        return persNo;
    }

    public void setPersNo(String persNo) {
        this.persNo = persNo;
    }

    public String getIdNo() {
        return idNo;
    }

    public void setIdNo(String idNo) {
        this.idNo = idNo;
    }

    public Double getGpfSubscription() {
        return gpfSubscription;
    }

    public void setGpfSubscription(Double gpfSubscription) {
        this.gpfSubscription = gpfSubscription;
    }

    public Double getIncomeTax() {
        return incomeTax;
    }

    public void setIncomeTax(Double incomeTax) {
        this.incomeTax = incomeTax;
    }

    public Double getIncomeTaxSurcharge() {
        return incomeTaxSurcharge;
    }

    public void setIncomeTaxSurcharge(Double incomeTaxSurcharge) {
        this.incomeTaxSurcharge = incomeTaxSurcharge;
    }

    public Double getCcsSubscription() {
        return ccsSubscription;
    }

    public void setCcsSubscription(Double ccsSubscription) {
        this.ccsSubscription = ccsSubscription;
    }

    public String getCcsMemNo() {
        return ccsMemNo;
    }

    public void setCcsMemNo(String ccsMemNo) {
        this.ccsMemNo = ccsMemNo;
    }
}