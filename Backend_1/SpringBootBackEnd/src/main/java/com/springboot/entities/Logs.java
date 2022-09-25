package com.springboot.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Temp_logs")
public class Logs {
	
	@Id
	@Column(name="SRNO")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int srno;
	
	@Column(name="CustomerId")
	private int customerId;
	
	@Column(name="PackageCode")
	private String packageCode;
	
	@Column(name="NumOfPerson")
	private int NumOfPerson;
	
	@Column(name="Cost")
	private float cost;
	
	@Column(name="Check_in")
	private Date check_in_date;
	//private String check_in_date;
	
	@Column(name="Check_out")
	private Date check_out_date;
	//private String check_out_date;
	
	public Logs() {
		// TODO Auto-generated constructor stub
	}

	public Logs(int customerId, String packageCode, int numOfPerson, float cost, Date check_in_date,
			Date check_out_date) {
		super();
		this.customerId = customerId;
		this.packageCode = packageCode;
		NumOfPerson = numOfPerson;
		this.cost = cost;
		this.check_in_date = check_in_date;
		this.check_out_date = check_out_date;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getPackageCode() {
		return packageCode;
	}

	public void setPackageCode(String packageCode) {
		this.packageCode = packageCode;
	}

	public int getNumOfPerson() {
		return NumOfPerson;
	}

	public void setNumOfPerson(int numOfPerson) {
		NumOfPerson = numOfPerson;
	}

	public float getCost() {
		return cost;
	}

	public void setCost(float cost) {
		this.cost = cost;
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

	@Override
	public String toString() {
		return "Logs [customerId=" + customerId + ", packageCode=" + packageCode + ", NumOfPerson=" + NumOfPerson
				+ ", cost=" + cost + ", check_in_date=" + check_in_date + ", check_out_date=" + check_out_date + "]";
	}

	/*public int getSrno() {
		return srno;
	}*/

	
	
    
}
