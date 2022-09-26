package com.springboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.entities.Customer;
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	//customized method
	Customer findById(int customerId);
}
