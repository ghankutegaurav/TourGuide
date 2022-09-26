package com.springboot.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.entities.Details;
import com.springboot.repositories.DetailsRepositroy;
@Service
public class DetailsServicesImpl implements DetailsServices {

	@Autowired
	private DetailsRepositroy detailsRepositroy;
	
	@Override
	public Details getSingleDetail(int customerId) {
		// TODO Auto-generated method stub
		//return detailsRepositroy.getOne(sr);
		return detailsRepositroy.findByCustomerId(customerId);
	}

	@Override
	public void addDetails(Details details) {
		// TODO Auto-generated method stub
		detailsRepositroy.save(details);
	}

}
