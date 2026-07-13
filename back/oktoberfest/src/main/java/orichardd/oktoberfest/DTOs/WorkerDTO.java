package orichardd.oktoberfest.DTOs;

import orichardd.oktoberfest.miscellaneous.Availability;
import orichardd.oktoberfest.miscellaneous.ShirtSize;
import orichardd.oktoberfest.miscellaneous.Shows;

import java.util.Date;
import java.util.List;

public record WorkerDTO(
        String firstName,
        String lastName,
        String CPF,
        Date birthDate,
        String address,
        String phoneNumber,
        String email,
        ShirtSize shirtSize,
        Availability quinta,
        Availability sexta,
        Availability sabado,
        Availability domingo,
        List<Shows> chosenShows
) {
}
