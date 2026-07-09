package orichardd.oktoberfest.controllers;

import jakarta.validation.Valid;
import org.apache.coyote.Response;
import orichardd.oktoberfest.DTOs.CheckJwtDTO;
import orichardd.oktoberfest.DTOs.LoginRequestDTO;
import orichardd.oktoberfest.DTOs.LoginResponseDTO;
import orichardd.oktoberfest.services.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody @Valid LoginRequestDTO request) {
        String token = authService.login(request.password());
        System.out.println("login");
        return ResponseEntity.ok(new LoginResponseDTO(token));
    }

}