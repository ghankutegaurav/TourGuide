package com.springboot.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.entities.Logs;	
public interface LogsRepository extends JpaRepository<Logs, Integer> {

	//custom package
	List<Logs> findByCustomerId(int customerId);
}
