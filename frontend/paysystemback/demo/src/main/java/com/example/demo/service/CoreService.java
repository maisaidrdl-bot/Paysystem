/* package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.PersMain;
import com.example.demo.repository.PersMainRepository;

@Service
public class CoreService {

    @Autowired
    private PersMainRepository persMainRepository;

    public boolean validateUser(Long persNo, String idNo) {

        Optional<PersMain> user =
                persMainRepository.findByPersNoAndIdNumber(
                        persNo,
                        idNo
                );

        return user.isPresent();
    }
}*/
/*package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.PersMain;
import com.example.demo.repository.PersMainRepository;

@Service
public class CoreService {

    @Autowired
    private PersMainRepository persMainRepository;

    public boolean validateUser(Long persNo, String idNo) {

        System.out.println("===== CORE VALIDATION =====");
        System.out.println("PersNo : " + persNo);
        System.out.println("IdNo   : " + idNo);

        Optional<PersMain> user =
                persMainRepository.findByPersNoAndIdNumber(
                        persNo,
                        idNo
                );

        System.out.println("User Found : " + user.isPresent());

        return user.isPresent();
    }
}
*/
/*package com.example.demo.service;

import org.springframework.stereotype.Service;

@Service
public class CoreService {

    public boolean validateUser(Long persNo, String idNo) {

        System.out.println("===== CORE VALIDATION =====");
        System.out.println("PersNo : " + persNo);
        System.out.println("IdNo   : " + idNo);

        return true;   // Temporary for UI testing
    }
}*/
package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Core;
import com.example.demo.entity.PersMain;
import com.example.demo.repository.CoreRepository;
import com.example.demo.repository.PersMainRepository;

@Service
public class CoreService {

    @Autowired
    private PersMainRepository persMainRepository;

    @Autowired
    private CoreRepository coreRepository;

    public boolean validateUser(Long persNo, String idNo) {

        System.out.println("===== CORE VALIDATION =====");
        System.out.println("PersNo : " + persNo);
        System.out.println("IdNo   : " + idNo);

        Optional<PersMain> user =
                persMainRepository.findByPersNoAndIdNumber(
                        persNo,
                        idNo
                );

        System.out.println("User Found : " + user.isPresent());

        return user.isPresent();
    }

    public void saveCore(Core core) {

        coreRepository.save(core);

        System.out.println("CORE SAVED");
    }
}