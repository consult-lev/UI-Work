package ru.app.web.api.services;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin/user")
public class UsersWebService {

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public String list() throws IOException {
		final StringBuffer sb = new StringBuffer();
		Files.readAllLines(new File("./src/main/java/ru/app/web/api/services/users.json").toPath()).stream()
				.forEach(s -> sb.append(s));
		return sb.toString();
	}
}
