package com.springboot.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.entities.Customer;
import com.springboot.entities.Logs;
import com.springboot.repositories.LogsRepository;
@Service
public class LogsServicesImpl implements LogsServices {

	@Autowired
	private LogsRepository logsRepository;
	
	@Override
	public List<Logs> getLogs() {
		// TODO Auto-generated method stub
		return logsRepository.findAll();
	}

	/*@Override
	public Iterable<Logs> getSingleLog(Long customerId) {
		// TODO Auto-generated method stub
		return logsRepository.findAllById(customerId);
	}*/
	
	public List<Logs>getSingleLog(int customerId){
		return logsRepository.findByCustomerId(customerId);
	}

}
