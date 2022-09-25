package com.springboot.services;

import java.util.List;

import com.springboot.entities.City;

public interface CitiesServices {
	
	List<City>getCities();
	
	//single city
	City getCity(String cityCode);
}
