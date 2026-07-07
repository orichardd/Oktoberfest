package orichardd.oktoberfest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import orichardd.oktoberfest.models.Worker;

public interface WorkerRepository extends JpaRepository<Worker, Long> {


    Worker findByCPF(String cpf);
}
