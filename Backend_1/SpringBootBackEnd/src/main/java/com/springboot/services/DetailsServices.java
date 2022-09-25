package com.springboot.services;

import java.util.List;

import com.springboot.entities.Details;

public interface DetailsServices {
	
	//List<Details>getDetails();
	
	//single detail
	Details getSingleDetail(int customerId);
	
	//add a details
	void addDetails(Details details);
}
