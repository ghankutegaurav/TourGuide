package com.springboot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.entities.Packages;
import com.springboot.repositories.PackageRepository;
@Service
public class PackageServicesImpl implements PackageServices {

	@Autowired
	private PackageRepository packageRepository;
	
	//get list of packages
	@Override
	public List<Packages> getPackages() {
		// TODO Auto-generated method stub
		return packageRepository.findAll();
	}

	@Override
	public Packages getPackage(String packageCode) {
		// TODO Auto-generated method stub
		//return packageRepository.getOne(packageCode);
		return packageRepository.findByPackageCode(packageCode);
	}

}
