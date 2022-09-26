package com.springboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.entities.Packages;


public interface PackageRepository extends JpaRepository<Packages,String> {

	Packages findByPackageCode(String packageCode);
}
