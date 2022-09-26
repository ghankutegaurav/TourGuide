package com.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//@ComponentScan({"com.springboot.controllers", "com.springboot.repositories"})
//@EnableJpaRepositories("com.springboot.repositories")
@SpringBootApplication
public class SpringBootBackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootBackEndApplication.class, args);
	}

}
