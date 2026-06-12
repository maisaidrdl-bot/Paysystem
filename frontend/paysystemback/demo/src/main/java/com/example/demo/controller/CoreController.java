/*package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.CoreValidationDTO;
import com.example.demo.service.CoreService;

@RestController
@RequestMapping("/api/core")
@CrossOrigin(origins = "http://localhost:5173")
public class CoreController {

    @Autowired
    private CoreService coreService;

    @PostMapping("/validate")
    public boolean validate(@RequestBody CoreValidationDTO dto) {

        return coreService.validateUser(
                dto.getPersNo(),
                dto.getIdNo()
        );
    }
}*/
package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.CoreValidationDTO;
import com.example.demo.entity.Core;
import com.example.demo.service.CoreService;

@RestController
@RequestMapping("/api/core")
@CrossOrigin(origins = "http://localhost:5173")
public class CoreController {

    @Autowired
    private CoreService coreService;

    @PostMapping("/validate")
    public boolean validate(@RequestBody CoreValidationDTO dto) {

        return coreService.validateUser(
                dto.getPersNo(),
                dto.getIdNo()
        );
    }

    @PostMapping("/save")
    public String saveCore(@RequestBody Core core) {

        coreService.saveCore(core);

        return "CORE Saved Successfully";
    }
}