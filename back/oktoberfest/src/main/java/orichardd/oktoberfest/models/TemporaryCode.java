package orichardd.oktoberfest.models;

import jakarta.persistence.*;

import java.security.SecureRandom;
import java.time.LocalDate;

@Entity(name = "temporary_codes")
public class TemporaryCode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String code;

    @Column(nullable = false)
    private LocalDate expirationDate;

    public TemporaryCode() {
        this.code = GenerateCode();
        this.expirationDate = LocalDate.now().plusDays(3);
    }

    private String GenerateCode() {
        SecureRandom random = new SecureRandom();
        StringBuilder sb = new StringBuilder();
        String chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

        for (int i = 0; i < 24; i++) {
            sb.append(chars.charAt(random.nextInt(chars.length())));
        }

        return sb.toString();
    }

    public Long getId() {
        return id;
    }

    public String getCode() {
        return code;
    }

    public LocalDate getExpirationDate() {
        return expirationDate;
    }
}
