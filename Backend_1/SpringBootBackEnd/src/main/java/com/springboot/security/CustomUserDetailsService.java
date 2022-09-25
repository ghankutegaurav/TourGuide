package com.springboot.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.springboot.entities.User;
import com.springboot.repositories.UserRepository;

import lombok.Setter;

import java.lang.Exception;
@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException  {
		// loading the user from the database
		User user=this.userRepository.findByEmail(username).orElseThrow(()-> new UsernameNotFoundException("User: "+username));
		return user;
	}

}
