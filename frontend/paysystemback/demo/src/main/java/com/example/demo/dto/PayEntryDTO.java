package com.example.demo.dto;

import java.util.Map;

public class PayEntryDTO {

    private String type; // credits / debits / recoveries
    private Map<String, String> data; // dynamic form fields

    public PayEntryDTO() {}

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Map<String, String> getData() {
        return data;
    }

    public void setData(Map<String, String> data) {
        this.data = data;
    }
}