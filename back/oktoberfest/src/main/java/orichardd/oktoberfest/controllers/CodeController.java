package orichardd.oktoberfest.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import orichardd.oktoberfest.services.TemporaryCodeService;

@RestController
@RequestMapping("/code")
public class CodeController {

    private final TemporaryCodeService service;

    public CodeController(TemporaryCodeService service) {
        this.service = service;
    }

    @GetMapping("/generate")
    public ResponseEntity<?> GenerateCode(){
        return ResponseEntity.ok().body(service.GenerateCode().getCode());
    }

}
