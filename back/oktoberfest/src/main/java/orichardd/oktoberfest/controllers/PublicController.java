package orichardd.oktoberfest.controllers;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import orichardd.oktoberfest.DTOs.CreateWorkerDTO;
import orichardd.oktoberfest.services.TemporaryCodeService;
import orichardd.oktoberfest.services.WorkerService;

@RestController
@RequestMapping("/public")
public class PublicController {

    private final WorkerService workerService;
    private final TemporaryCodeService temporaryCodeService;

    public PublicController(WorkerService workerService, TemporaryCodeService temporaryCodeService) {
        this.workerService = workerService;
        this.temporaryCodeService = temporaryCodeService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> CreateWorker(@RequestBody @Valid CreateWorkerDTO dto, @RequestParam String code){
        if(!temporaryCodeService.ValidateCode(code)){
            return ResponseEntity.badRequest().body("Código inválido, peça outro link válido.");
        }
        workerService.CreateWorker(dto);
        return ResponseEntity.ok("Adicionado com sucesso.");
    }

}
