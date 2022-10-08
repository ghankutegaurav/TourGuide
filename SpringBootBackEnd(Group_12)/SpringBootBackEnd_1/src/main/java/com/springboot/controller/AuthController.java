package com.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.payloads.JwtAuthRequest;
import com.springboot.payloads.JwtAuthResponse;
import com.springboot.security.JwtTokenHelper;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/v1/auth/")
public class AuthController {
	@Autowired
	private  JwtTokenHelper jwtTokenHelper;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	//jwt methods
		@PostMapping(value="/login")
		public ResponseEntity<JwtAuthResponse>createToken(
				@RequestBody JwtAuthRequest request) throws Exception{
			System.out.println("Email: "+request.getEmail());
			System.out.println("Password: "+request.getPassword());
			this.authenticate(request.getEmail(),request.getPassword());
			UserDetails userDetails=this.userDetailsService.loadUserByUsername(request.getEmail());
			String token=this.jwtTokenHelper.generateToken(userDetails);
			JwtAuthResponse authResponse = new JwtAuthResponse();
			authResponse.setToken(token);
			return new ResponseEntity<JwtAuthResponse>(authResponse,HttpStatus.OK);
		}

		private void authenticate(String email, String password)throws Exception {
			// TODO Auto-generated method stub
			UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken=
					new UsernamePasswordAuthenticationToken(email, password);
			try {
			this.authenticationManager.authenticate(usernamePasswordAuthenticationToken);
			}catch(BadCredentialsException ex) {
				System.out.println("Invalid details....!!!");
				throw new Exception("Invalid UserName and Password");
			}
			
		}
}
