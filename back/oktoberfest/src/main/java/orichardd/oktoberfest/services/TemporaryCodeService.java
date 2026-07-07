package orichardd.oktoberfest.services;

import org.springframework.stereotype.Service;
import orichardd.oktoberfest.exceptions.InvalidCredentialsException;
import orichardd.oktoberfest.models.TemporaryCode;
import orichardd.oktoberfest.repositories.TemporaryCodeRepository;

import java.time.LocalDate;

@Service
public class TemporaryCodeService {

    private final TemporaryCodeRepository temporaryCodeRepository;

    public TemporaryCodeService(TemporaryCodeRepository repository) {
        this.temporaryCodeRepository = repository;
    }

    public Boolean ValidateCode(String code) {
        TemporaryCode foundCode = temporaryCodeRepository.getTemporaryCodeByCode(code);
        if(foundCode == null){
            throw new InvalidCredentialsException("Código inexistente, peça um link válido.");
        }
        if(foundCode.getExpirationDate().isBefore(LocalDate.now())){
            throw new InvalidCredentialsException("Código expirado, peça um link novo.");
        }
        return true;
    }

    public TemporaryCode GenerateCode(){
        TemporaryCode code = new TemporaryCode();
        temporaryCodeRepository.save(code);
        return code;
    }

}
