package orichardd.oktoberfest.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import orichardd.oktoberfest.DTOs.CheckJwtDTO;
import orichardd.oktoberfest.exceptions.InvalidCredentialsException;

@Service
public class AuthService {

    @Value("${manager.password.hash}")
    private String storedHash;

    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public String login(String rawPassword) {
        if (!passwordEncoder.matches(rawPassword, storedHash)) {
            throw new IllegalArgumentException("Senha inválida");
        }
        return jwtService.generateToken();
    }

    public void Check(CheckJwtDTO dto) {
        if(!jwtService.isTokenValid(dto.token())){
            throw new InvalidCredentialsException("Token inválido.");
        }
    }
}