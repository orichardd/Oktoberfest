package orichardd.oktoberfest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import orichardd.oktoberfest.models.TemporaryCode;

@Repository
public interface TemporaryCodeRepository extends JpaRepository<TemporaryCode, Long> {
    TemporaryCode getTemporaryCodeByCode(String code);
}
