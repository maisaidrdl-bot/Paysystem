package com.example.demo.service;

import java.util.Date;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.PayEntryDTO;
import com.example.demo.entity.PayTransaction;
import com.example.demo.repository.PayTransactionRepository;
import org.springframework.transaction.annotation.Transactional;
@Service
public class PayTransactionService {

    @Autowired
    private PayTransactionRepository repo;
    @Transactional
public void saveEntry(PayEntryDTO dto) {
         System.out.println("DTO DATA: " + dto.getData());
        Map<String, String> data = dto.getData();

        for (Map.Entry<String, String> entry : data.entrySet()) {

            String fieldName = entry.getKey();
            String value = entry.getValue();
            System.out.println("Field: " + fieldName + " Value: " + value);

            // skip remarks
            if (fieldName.toLowerCase().contains("remark")) continue;

            if (value != null && !value.isEmpty()) {

                try {
                    double amount = Double.parseDouble(value);

                    if (amount > 0) {

System.out.println("Saving: " + fieldName + " Amount: " + amount);

                        String remarkKey = fieldName + "Remark";
                        String remark = data.get(remarkKey);

                        if (remark == null || remark.trim().isEmpty()) {
                            throw new RuntimeException("Remark required for " + fieldName);
                        }

                        PayTransaction entity = new PayTransaction();

                        entity.setFieldName(fieldName);
                        entity.setAmount(amount);
                        entity.setType(1);
                        entity.setPurpose(remark);

                        entity.setMonthYear(new Date());
                        entity.setDtdni(new Date());
                        entity.setPersonNo("PERS001");

                        repo.save(entity);
                    }

                } catch (NumberFormatException e) {
                     System.out.println("Invalid number: " + value);
                    // ignore non-number fields
                }
            }
        }
    }
}