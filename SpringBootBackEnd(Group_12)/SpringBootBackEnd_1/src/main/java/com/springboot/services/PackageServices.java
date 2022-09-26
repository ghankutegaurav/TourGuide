package com.springboot.services;

import java.util.List;

import com.springboot.entities.Packages;

public interface PackageServices {

	List<Packages>getPackages();
	
	//get a single package
	Packages getPackage(String packageCode);
}
