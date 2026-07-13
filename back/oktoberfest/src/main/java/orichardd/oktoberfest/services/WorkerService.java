package orichardd.oktoberfest.services;

import org.springframework.stereotype.Service;
import orichardd.oktoberfest.DTOs.CreateWorkerDTO;
import orichardd.oktoberfest.DTOs.WorkerDTO;
import orichardd.oktoberfest.exceptions.InvalidCredentialsException;
import orichardd.oktoberfest.miscellaneous.Shows;
import orichardd.oktoberfest.models.Worker;
import orichardd.oktoberfest.repositories.WorkerRepository;

import java.util.EnumMap;
import java.util.List;
import java.util.Map;

@Service
public class WorkerService {

    private final WorkerRepository workerRepository;

    public WorkerService(WorkerRepository workerRepository) {
        this.workerRepository = workerRepository;
    }

    public void CreateWorker(CreateWorkerDTO dto){
        Worker found = workerRepository.findByCPFOrEmailOrPhoneNumber(dto.CPF(), dto.email(), dto.phoneNumber());
        if(found != null){
            throw new InvalidCredentialsException("Credenciais já cadastradas.");
        }
        try{
            workerRepository.save(new Worker(
                    dto.firstName(),
                    dto.lastName(),
                    dto.CPF(),
                    dto.birthDate(),
                    dto.address(),
                    dto.phoneNumber(),
                    dto.email(),
                    dto.shirtSize(),
                    dto.quinta(),
                    dto.sexta(),
                    dto.sabado(),
                    dto.domingo(),
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
                        worker.getEmail(),
                        worker.getShirtSize(),
                        worker.getQuinta(),
                        worker.getSexta(),
                        worker.getSabado(),
                        worker.getDomingo(),
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

    public Long CountWorkers() {
        return workerRepository.count();
    }

    public Map<Shows, Integer> CountPerShow() {

        Map<Shows, Integer> counts = new EnumMap<>(Shows.class);

        for (Shows show : Shows.values()) {
            counts.put(show, 0);
        }

        for (Worker worker : workerRepository.findAll()) {
            for (Shows show : worker.getChosenShows()) {
                counts.put(show, counts.get(show) + 1);
            }
        }

        return counts;
    }
}