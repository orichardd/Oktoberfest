package orichardd.oktoberfest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import orichardd.oktoberfest.models.TemporaryCode;

public interface TemporaryCodeRepository extends JpaRepository<TemporaryCode, Long> {
}
