package orichardd.oktoberfest.DTOs;

import org.hibernate.validator.constraints.br.CPF;
import orichardd.oktoberfest.miscellaneous.Availability;
import orichardd.oktoberfest.miscellaneous.ShirtSize;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import orichardd.oktoberfest.miscellaneous.Shows;

import java.util.Date;
import java.util.List;

public record CreateWorkerDTO(
        @NotBlank
        String firstName,
        @NotBlank
        String lastName,
        @CPF
        @NotBlank
        String CPF,
        @NotNull
        Date birthDate,
        @NotBlank
        String address,
        @NotBlank
        String phoneNumber,
        @NotBlank
        String email,
        @NotNull
        ShirtSize shirtSize,
        @NotNull
        Availability domingo,
        @NotNull
        Availability segunda,
        @NotNull
        Availability terca,
        @NotNull
        Availability quarta,
        @NotNull
        Availability quinta,
        @NotNull
        Availability sexta,
        @NotNull
        Availability sabado,
        @NotNull
        List<Shows> chosenShows
) {
}
