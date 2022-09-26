package com.springboot.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Details")
public class Details {

	@Id
	@Column(name="SRNO")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int sr;
	
	@Column(name="CustomerId")
	private int customerId;
	
	@Column(name="CityCode")
	private String cityCode;
	
	@Column(name="PackageCode")
	private String packageCode;
	
	@Column(name="CHECK_IN_DATE")
	//private String check_in_date;
	private Date check_in_date;
	
	@Column(name="CHECK_OUT_DATE")
	//private String check_out_date;
	private Date check_out_date;
	
	@Column(name="NumOfPerson")
	private int numOfPerson;
	
	public Details() {
		// TODO Auto-generated constructor stub
	}

	public Details(int customerId, String cityCode, String packageCode, Date check_in_date, Date check_out_date,
			int numOfPerson) {
		super();
		this.customerId = customerId;
		this.cityCode = cityCode;
		this.packageCode = packageCode;
		this.check_in_date = check_in_date;
		this.check_out_date = check_out_date;
		this.numOfPerson = numOfPerson;
	}

	/*
	 * public void setSrno(int srno) { this.srno = srno; }
	 */

	public int getSr() {
		return sr;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getCityCode() {
		return cityCode;
	}

	public void setCityCode(String cityCode) {
		this.cityCode = cityCode;
	}

	public String getPackageCode() {
		return packageCode;
	}

	public void setPackageCode(String packageCode) {
		this.packageCode = packageCode;
	}

	public Date getCheck_in_date() {
		return check_in_date;
	}

	public void setCheck_in_date(Date check_in_date) {
		this.check_in_date = check_in_date;
	}

	public Date getCheck_out_date() {
		return check_out_date;
	}

	public void setCheck_out_date(Date check_out_date) {
		this.check_out_date = check_out_date;
	}

	public int getNumOfPerson() {
		return numOfPerson;
	}

	public void setNumOfPerson(int numOfPerson) {
		this.numOfPerson = numOfPerson;
	}

	@Override
	public String toString() {
		return "Details [customerId=" + customerId + ", cityCode=" + cityCode + ", packageCode=" + packageCode
				+ ", check_in_date=" + check_in_date + ", check_out_date=" + check_out_date + ", numOfPerson="
				+ numOfPerson + "]";
	}

	/*
	 * public int getSr() { return sr; }
	 */

	
	
	
	
}
