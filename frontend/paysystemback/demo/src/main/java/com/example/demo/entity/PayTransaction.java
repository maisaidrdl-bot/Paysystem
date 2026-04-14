package com.example.demo.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "\"T_TEMPUPDATE\"",schema = "SYSTEM")
public class PayTransaction {

   @Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "temp_seq")
@SequenceGenerator(
    name = "temp_seq",
    sequenceName = "TEMPUPDATE_SEQ",
    allocationSize = 1
)
private Long id;

    @Column(name = "F_VC2NAME")
    private String fieldName;

    @Column(name = "F_NAMOUNT")
    private Double amount;

    @Column(name = "F_NTYPE")
    private Integer type;

    @Column(name = "F_CPERSNO")
    private String personNo;

    @Column(name = "F_PURPOSE")
    private String purpose;

    @Column(name = "F_DTMONTHYEAR")
    private Date monthYear;

    @Column(name = "F_DTDNI")
    private Date dtdni;

    // getters & setters
    public Long getId() { return id; }

    public String getFieldName() { return fieldName; }
    public void setFieldName(String fieldName) { this.fieldName = fieldName; }

    public Double getAmount() { return amount; }
    public void setAmount(Double amount) { this.amount = amount; }

    public Integer getType() { return type; }
    public void setType(Integer type) { this.type = type; }

    public String getPersonNo() { return personNo; }
    public void setPersonNo(String personNo) { this.personNo = personNo; }

    public String getPurpose() { return purpose; }
    public void setPurpose(String purpose) { this.purpose = purpose; }

    public Date getMonthYear() { return monthYear; }
    public void setMonthYear(Date monthYear) { this.monthYear = monthYear; }

    public Date getDtdni() { return dtdni; }
    public void setDtdni(Date dtdni) { this.dtdni = dtdni; }

    public void setId(Long id) {
        this.id = id;
    }
}