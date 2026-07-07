package orichardd.oktoberfest.services;

import org.springframework.stereotype.Service;
import orichardd.oktoberfest.models.TemporaryCode;
import orichardd.oktoberfest.repositories.TemporaryCodeRepository;

@Service
public class TemporaryCodeService {

    private final TemporaryCodeRepository repository;

    public TemporaryCodeService(TemporaryCodeRepository repository) {
        this.repository = repository;
    }

    public static void ValidateCode(String code) {
        //in production
    }

    public TemporaryCode GenerateCode(){
        TemporaryCode code = new TemporaryCode();
        return code;
    }

}
