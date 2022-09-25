package com.springboot.services;

import java.util.List;

import com.springboot.entities.Customer;

public interface CustomerSevices {
	public List<Customer>getCustomers();
	
	public Customer getCustomer(int customerId);
	
	public void addCustomer(Customer customer);
}
