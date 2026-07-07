package orichardd.oktoberfest.services;

import org.springframework.stereotype.Service;
import orichardd.oktoberfest.DTOs.CreateWorkerDTO;
import orichardd.oktoberfest.DTOs.WorkerDTO;
import orichardd.oktoberfest.models.Worker;
import orichardd.oktoberfest.repositories.WorkerRepository;

import java.util.List;

@Service
public class WorkerService {

    private final WorkerRepository workerRepository;

    public WorkerService(WorkerRepository workerRepository) {
        this.workerRepository = workerRepository;
    }

    public void CreateWorker(CreateWorkerDTO dto){
        try{
            workerRepository.save(new Worker(
                    dto.firstName(),
                    dto.lastName(),
                    dto.CPF(),
                    dto.birthDate(),
                    dto.address(),
                    dto.phoneNumber(),
                    dto.shirtSize(),
                    dto.domingo(),
                    dto.segunda(),
                    dto.terca(),
                    dto.quarta(),
                    dto.quinta(),
                    dto.sexta(),
                    dto.sabado(),
                    dto.chosenShows()
            ));
        }
        catch (Exception e){
            throw new IllegalArgumentException("Erro ao cadastrar: %s".formatted(e.getMessage()));
        }
    }

    public List<WorkerDTO> getAllWorkers() {
        return workerRepository.findAll()
                .stream()
                .map(worker -> new WorkerDTO(
                        worker.getFirstName(),
                        worker.getLastName(),
                        worker.getCPF(),
                        worker.getBirthDate(),
                        worker.getAddress(),
                        worker.getPhoneNumber(),
                        worker.getShirtSize(),
                        worker.getDomingo(),
                        worker.getSegunda(),
                        worker.getTerca(),
                        worker.getQuarta(),
                        worker.getQuinta(),
                        worker.getSexta(),
                        worker.getSabado(),
                        worker.getChosenShows()
                ))
                .toList();
    }

    public void DeleteWorker(String CPF){
        Worker worker = workerRepository.findByCPF(CPF);
        if(worker == null){
            throw new IllegalArgumentException("Colaborador não encontrado");
        }
        workerRepository.delete(worker);
    }
}