package com.springboot.security;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtTokenHelper {
	
	public static final long JWT_TOKEN_VALIDITY =  5 * 60 * 60; //in milliseconds
	
	private String secret ="jwtTokenKey";
	
	//retrieve username from jwt token
	public String getUsernameFromToen(String token) {
		//return getClaimFromToken(token, Claims::getSubject);
		return getAllClaimFromToken(token,Claims::getSubject);
	}
	
	private String getAllClaimFromToken(String token, Object object) {
		// TODO Auto-generated method stub
		return null;
	}

	//retrieve expiration date from jwt token
	public Date getExpirationDateFromToken(String token) {
		return getClaimFromToken(token, Claims::getExpiration);
	}
	
	public <T> getClaimFromToken(String token,Function<Claims, R> claimsResolver){
		final Claims claims = getAllClaimsFromToken(token);
		return claimsResolver.apply(claims);
	}
	
	//for retrieving any information from token we will need the secret key
	private Claims getAllClaimsFromToken(String token) {
		return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
	}
	
	//check if token has expired
	private Boolean isTokenExpired(String token) {
		final Date expiration = getExpirationDateFromToken(token);
		return expiration.before(new Date());
	}
	
	//generate token for user
	public String generateToken(UserDetails userDetails) {
		Map<String, Object>claims=new HashMap<String, Object>();
		return doGenerateToken(claims,userDetails.getUsername());
	}
	
	//while creating the token
	//1. Define claims of the token ,like Issuer,Expiration, Subject and the ID
	//2. Sign the JWT using the HS512 algorithms and secret key.
	//3. According to JWS Compact Serialization
	// compaction of the JWT to a URL-safe string
	private String doGenerateToken(Map<String,Object> claims , String subject) {
		return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis())).setExpiration(new Date(System.currentTimeMillis() +JWT_TOKEN_VALIDITY *1000))
				.signWith(SignatureAlgorithm.HS512, secret).compact();
	}
	
	//validate token
	public Boolean validateToken(String token, UserDetails userDetails) {
		final String username=getUsernameFromToen(token);
		return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
	}
}
