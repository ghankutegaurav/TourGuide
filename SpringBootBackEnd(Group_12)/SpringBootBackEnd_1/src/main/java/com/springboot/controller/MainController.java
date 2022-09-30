package com.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.entities.City;
import com.springboot.entities.Customer;
import com.springboot.entities.Details;
import com.springboot.entities.Logs;
import com.springboot.entities.Packages;
import com.springboot.payloads.JwtAuthRequest;
import com.springboot.payloads.JwtAuthResponse;
import com.springboot.security.JwtTokenHelper;
import com.springboot.services.CitiesServices;
import com.springboot.services.CustomerSevices;
import com.springboot.services.DetailsServices;
import com.springboot.services.LogsServices;
import com.springboot.services.PackageServices;



@RestController
@CrossOrigin("http://localhost:3000")
public class MainController {

	@Autowired
	private CustomerSevices customerSevices;
	
	@Autowired
	private CitiesServices citiesServices;
	
	@Autowired
	private PackageServices packageServices;
	
	@Autowired
	private DetailsServices detailsServices;
	
	@Autowired
	private LogsServices logsServices;
	
//	@Autowired
//	private  JwtTokenHelper jwtTokenHelper;
//	
//	@Autowired
//	private UserDetailsService userDetailsService;
//	
//	@Autowired
//	private AuthenticationManager authenticationManager;
	
	@GetMapping("/home")
	public String home() {
		return "Welcome to My Project";
	}
	
	//to view the list of customers
	@GetMapping(value="/customers")
	public List<Customer>getCustomers(){
		return this.customerSevices.getCustomers();
	}
	
	//to view only one customer
	@GetMapping(value="/customers/{customerId}")
	public Customer getCustomer(@PathVariable int customerId) {
		//System.out.println("---@@@@-----");
		return this.customerSevices.getCustomer(customerId);
	}
	
	//to add a new customer to database
	@PostMapping(value="/customers")
	public void addCustomer(@RequestBody Customer customer) {
	customerSevices.addCustomer(customer);
	}
	
	//to get list of all cities in the database
	@GetMapping(value="/cities")
	public List<City>getCities(){
		return this.citiesServices.getCities();
	}
	
	//get the city with the specified
	@GetMapping(value="/cities/{cityCode}")
	public City getSingleCity(@PathVariable String cityCode) {
		return this.citiesServices.getCity(cityCode);
	}
	
	//to get list of packages
	@GetMapping(value="/packages")
	public List<Packages>getPackages(){
		return this.packageServices.getPackages();
	}
	
	//to get the detail of the specified package 
	@GetMapping(value="/packages/{packageCode}")
	public Packages getSinglePackage(@PathVariable String packageCode) {
		return this.packageServices.getPackage(packageCode);
	}
	
	//to get the detials about the spcified customer
	@GetMapping(value="/details/{customerId}")
	public Details  getSingleDetail(@PathVariable int customerId){
		return this.detailsServices.getSingleDetail(customerId);
	}
	
	@PostMapping(value="/details")
	public void addDetails(@RequestBody Details details) {
		detailsServices.addDetails(details);
	}
	
	//to get the logs entry
	@GetMapping("/logs")
	public List<Logs>getAllLogs(){
		return this.logsServices.getLogs();
	}
	
	@GetMapping("/logs/{customerId}")
	public List<Logs>getSingleLogofCustomer(@PathVariable int customerId){
		return logsServices.getSingleLog(customerId);
	}
	
	//customer exists or not-> sign in check
	@GetMapping(value="/customersExists")
	public boolean customerExists(@RequestParam(value="customerId") int customerId,
			@RequestParam(value="password")String password) {
		Customer customer= this.customerSevices.getCustomer(customerId);
		if(customer.getPassword().equals(password)) {
			return true;
		}
		return false;
	}
	
//	//jwt methods
//	@PostMapping(value="/login")
//	public ResponseEntity<JwtAuthResponse>createToken(
//			@RequestBody JwtAuthRequest request){
//		this.authenticate(request.getEmail(),request.getPassword());
//		UserDetails userDetails=this.userDetailsService.loadUserByUsername(request.getEmail());
//		String token=this.jwtTokenHelper.generateToken(userDetails);
//		JwtAuthResponse authResponse = new JwtAuthResponse();
//		authResponse.setToken(token);
//		return new ResponseEntity<JwtAuthResponse>(authResponse,HttpStatus.OK);
//	}
//
//	private void authenticate(String email, String password) {
//		// TODO Auto-generated method stub
//		UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken=
//				new UsernamePasswordAuthenticationToken(email, password);
//	
//		this.authenticationManager.authenticate(usernamePasswordAuthenticationToken);
//	
//		
//	}
}
