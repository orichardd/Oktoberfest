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

    public PublicController(WorkerService workerService) {
        this.workerService = workerService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> CreateWorker(@RequestBody @Valid CreateWorkerDTO dto, @RequestParam String code){
        TemporaryCodeService.ValidateCode(code);
        workerService.CreateWorker(dto);
        return ResponseEntity.ok("Adicionado com sucesso.");
    }

}
