package com.springboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.springboot.entities.Details;
public interface DetailsRepositroy extends JpaRepository<Details, Integer> {
	
	//custom method
	Details findByCustomerId(int customerId);
}
