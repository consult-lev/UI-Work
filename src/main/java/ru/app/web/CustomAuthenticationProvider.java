package ru.app.web;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		String login = authentication.getName();
		String password = (String) authentication.getCredentials();

		if (!"admin".equals(login)) {
			throw new BadCredentialsException("Пользователь не найден.");
		}

		if (!"admin".equals(password)) {
			throw new BadCredentialsException("Не верный пароль.");
		}

		List<GrantedAuthority> list = new ArrayList<>();
		list.add(new SimpleGrantedAuthority("ROLE_ADMIN"));

		return new UsernamePasswordAuthenticationToken(login, password, list);
	}

	@Override
	public boolean supports(Class<?> arg0) {
		return true;
	}
}
