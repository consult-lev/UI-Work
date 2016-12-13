package ru.app.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private CustomAuthenticationProvider customAuthenticationProvider;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors();
		http.authorizeRequests() //
				.antMatchers("/resources/**").permitAll() //
				.antMatchers("/favicon.ico").permitAll() //
				.anyRequest().authenticated() //
				// login
				.and().formLogin().loginPage("/login").permitAll()
				// logout
				.and().logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout")).logoutSuccessUrl("/login")
				.permitAll();
		http.authenticationProvider(customAuthenticationProvider);
		http.csrf().disable();
		http.headers().frameOptions().sameOrigin();
	}
}