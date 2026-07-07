package orichardd.oktoberfest.DTOs;

import jakarta.validation.constraints.NotBlank;

public record LoginRequestDTO(
        @NotBlank
        String password
) {
}
