package com.springboot.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Customer")
public class Customer {

	@Id
	@Column(name="CustomerId")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int customerid;
	@Column(name="FirstName")
	private  String firstName;
	@Column(name="LastName")
	private String lastName;
	@Column(name="PhoneNo")
	private String phoneNo;
	@Column(name="Email")
	private String email;
	@Column(name="Password")
	private String password;
	@Column(name="CityCode")
	private String citycode;
	@Column(name="DateOfBirth")
	private String dateOfBirth;
	@Column(name="UID")
	private String uid;
	
	public Customer() {
		// TODO Auto-generated constructor stub
	}

	public Customer(String firstName, String lastName, String phoneNo, String email, String password,
			String citycode, String dateOfBirth, String uid) {
		super();
		//this.customerid = customerid;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNo = phoneNo;
		this.email = email;
		this.password = password;
		this.citycode = citycode;
		this.dateOfBirth = dateOfBirth;
		this.uid = uid;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCitycode() {
		return citycode;
	}

	public void setCitycode(String citycode) {
		this.citycode = citycode;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public long getCustomerid() {
		return customerid;
	}

	@Override
	public String toString() {
		return "Customer [customerid=" + customerid + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", phoneNo=" + phoneNo + ", email=" + email + ", password=" + password + ", citycode=" + citycode
				+ ", dateOfBirth=" + dateOfBirth + ", uid=" + uid + "]";
	}
	
	
}
