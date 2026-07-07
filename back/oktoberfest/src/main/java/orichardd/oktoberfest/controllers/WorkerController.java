package orichardd.oktoberfest.controllers;

import jakarta.validation.Valid;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import orichardd.oktoberfest.DTOs.CreateWorkerDTO;
import orichardd.oktoberfest.repositories.WorkerRepository;
import orichardd.oktoberfest.services.WorkerService;

@RestController
@RequestMapping("/worker")
public class WorkerController {

    private final WorkerService workerService;

    public WorkerController(WorkerService workerService) {
        this.workerService = workerService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> CreateWorker(@RequestBody @Valid CreateWorkerDTO dto){
        workerService.CreateWorker(dto);
        return ResponseEntity.ok("Adicionado com sucesso.");
    }

    @PostMapping("/senha")
    public void Generate(@RequestBody String senha){
        String rawPassword = senha  ;
        String hash = new org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder().encode(rawPassword);
        System.out.println(hash);
    }

}
