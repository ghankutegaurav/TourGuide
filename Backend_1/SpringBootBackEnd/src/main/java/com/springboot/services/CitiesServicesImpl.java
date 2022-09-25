package com.springboot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.entities.City;
import com.springboot.repositories.CityRespository;
@Service
public class CitiesServicesImpl implements CitiesServices {

	@Autowired
	private CityRespository cityRespository;
	
	//get list of cities
	@Override
	public List<City> getCities() {
		// TODO Auto-generated method stub
		return cityRespository.findAll();
	}

	@Override
	public City getCity(String cityCode) {
		// TODO Auto-generated method stub
		//return cityRespository.getOne(cityCode);
		return cityRespository.findByCityCode(cityCode);
	}

}
