package com.springboot.services;

import java.util.List;

import com.springboot.entities.Logs;

public interface LogsServices {

	List<Logs>getLogs();
	
	//get a single log
	List<Logs> getSingleLog(int customerId);
	//Iterable<Logs>getSingleLog(Long customerId);
}
