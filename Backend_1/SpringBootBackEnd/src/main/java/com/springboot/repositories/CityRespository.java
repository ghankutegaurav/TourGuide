package com.springboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.entities.City;
public interface CityRespository extends JpaRepository<City, String> {
	//custom method
	City findByCityCode(String cityCode);
}
