package com.springboot.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Packages")
public class Packages {
	
	@Id
	@Column(name="PackageCode")
	private String packageCode;
	
	@Column(name="CityCode")
	private String cityCode;
	
	@Column(name="PackageName")
	private String packageName;
	
	@Column(name="Cost")
	private float cost;
	
	public Packages() {
		// TODO Auto-generated constructor stub
	}

	public Packages(String packageCode, String cityCode, String packageName, float cost) {
		super();
		this.packageCode = packageCode;
		this.cityCode = cityCode;
		this.packageName = packageName;
		this.cost = cost;
	}

	public String getPackageCode() {
		return packageCode;
	}

	public void setPackageCode(String packageCode) {
		this.packageCode = packageCode;
	}

	public String getCityCode() {
		return cityCode;
	}

	public void setCityCode(String cityCode) {
		this.cityCode = cityCode;
	}

	public String getPackageName() {
		return packageName;
	}

	public void setPackageName(String packageName) {
		this.packageName = packageName;
	}

	public float getCost() {
		return cost;
	}

	public void setCost(float cost) {
		this.cost = cost;
	}

	@Override
	public String toString() {
		return "Package [packageCode=" + packageCode + ", cityCode=" + cityCode + ", packageName=" + packageName
				+ ", cost=" + cost + "]";
	}
	
}
