package com.webzy.jwt.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.webzy.jwt.repository.AppUserRepo;
import com.webzy.jwt.repository.PaymentRepo;
import com.webzy.jwt.repository.RechargeRepo;
import com.webzy.jwt.entity.AppUser;
import com.webzy.jwt.entity.Payment;
import com.webzy.jwt.entity.Recharge;

import lombok.RequiredArgsConstructor;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RechargeServiceImpl implements RechargeService {

    private final RechargeRepo rechargeRepository;

    private final AppUserRepo appUserRepository;

    private final PaymentRepo paymentRepo;

    @Override
    public List<Recharge> getAllRecharges() {
        return rechargeRepository.findAll();
    }

    @Override
    public Recharge getRechargeById(Long id) {
        return rechargeRepository.findById(id).orElse(null);
    }

    @Override
    public ResponseEntity<String> createRecharge(String userName, Recharge recharge) {

        Date currentDate = new Date();

        AppUser user = appUserRepository.findByUserName(userName);

        recharge.setApp_user(user);
        recharge.setMobileNumber(user.getMobileNumber());

        rechargeRepository.save(recharge);

        Payment payment = new Payment();
        payment.setPaymentDate(currentDate);
        payment.setStatus("Success");
        payment.setTotalAmount(recharge.getRechargePrice());
        payment.setModeOfPayment("UPI");
        payment.setRecharge(recharge);
        payment.setUser(user);

        paymentRepo.save(payment);

        return ResponseEntity.status(HttpStatus.CREATED).body("Recharge successful");
    }
    @Override
    public ResponseEntity<String> createRechargeForOthers(String userName, Long mobileNumber,  Recharge recharge) {

        Date currentDate = new Date();

        AppUser user = appUserRepository.findByUserName(userName);

        recharge.setApp_user(user);
        recharge.setMobileNumber(mobileNumber);

        rechargeRepository.save(recharge);

        Payment payment = new Payment();
        payment.setPaymentDate(currentDate);
        payment.setStatus("Success");
        payment.setTotalAmount(recharge.getRechargePrice());
        payment.setModeOfPayment("UPI");
        payment.setRecharge(recharge);
        payment.setUser(user);

        paymentRepo.save(payment);

        return ResponseEntity.status(HttpStatus.CREATED).body("Recharge successful");
    }

    @Override
    public Recharge updateRecharge(Long id, Recharge recharge) {
        recharge.setRechargeId(id);
        return rechargeRepository.save(recharge);
    }

    @Override
    public void deleteRecharge(Long id) {
        rechargeRepository.deleteById(id);
    }

    public List<Recharge> getRechargesByUserName(String username) {
        try {
            AppUser user = appUserRepository.findByUserName(username);
            return rechargeRepository.findByApp_user(username);
        } catch (Exception e) {
            return null;
        }
    }
}
