package com.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.password.PasswordEncoder;
//@ComponentScan({"com.springboot.controllers", "com.springboot.repositories"})
//@EnableJpaRepositories("com.springboot.repositories")
@SpringBootApplication
public class SpringBootBackEndApplication implements CommandLineRunner{

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public static void main(String[] args) {
		SpringApplication.run(SpringBootBackEndApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		System.out.println(this.passwordEncoder.encode("xyz1999"));
	}

}
