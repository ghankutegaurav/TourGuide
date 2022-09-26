package com.springboot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.entities.Customer;
import com.springboot.repositories.CustomerRepository;
@Service
public class CustomerServicseImpl implements CustomerSevices {

	@Autowired
	private CustomerRepository customerRepository;
	
	//get list of customers
	@Override
	public List<Customer> getCustomers() {
		// TODO Auto-generated method stub
		return customerRepository.findAll();
	}

	@Override
	public void addCustomer(Customer customer) {
		// TODO Auto-generated method stub
		customerRepository.save(customer);
	}

	@Override
	public Customer getCustomer(int customerId) {
		// TODO Auto-generated method stub
		//return customerRepository.getOne(customerId);
		return customerRepository.findById(customerId);
	}

}
