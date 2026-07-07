package orichardd.oktoberfest.controllers;

import jakarta.validation.Valid;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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

    @GetMapping("/getAll")
    public ResponseEntity<?> GetAllWorkers(){
        return ResponseEntity.ok(workerService.getAllWorkers());
    }

}
