package orichardd.oktoberfest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import orichardd.oktoberfest.models.Worker;

@Repository
public interface WorkerRepository extends JpaRepository<Worker, Long> {


    Worker findByCPF(String cpf);

    Worker findByPhoneNumber(String phoneNumber);

    Worker findByEmail(String email);

    Worker findByCPFOrEmailOrPhoneNumber(String cpf, String email, String phoneNumber);
}
