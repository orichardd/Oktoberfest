package orichardd.oktoberfest.models;

import jakarta.persistence.*;
import org.hibernate.validator.constraints.br.CPF;
import orichardd.oktoberfest.miscellaneous.Availability;
import orichardd.oktoberfest.miscellaneous.ShirtSize;
import orichardd.oktoberfest.miscellaneous.Shows;

import java.util.Date;
import java.util.List;

@Entity(name = "workers")
public class Worker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @CPF
    @Column(nullable = false, unique = true)
    private String CPF;

    @Column(nullable = false)
    private Date birthDate;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false, unique = true)
    private String phoneNumber;

    @Column(nullable = false)
    private ShirtSize shirtSize;

    @Column(nullable = false)
    private Availability domingo;

    @Column(nullable = false)
    private Availability segunda;

    @Column(nullable = false)
    private Availability terca;

    @Column(nullable = false)
    private Availability quarta;

    @Column(nullable = false)
    private Availability quinta;

    @Column(nullable = false)
    private Availability sexta;

    @Column(nullable = false)
    private Availability sabado;

    @Column(nullable = false)
    private List<Shows> chosenShows;

    public Worker() {
    }

    public Worker(String firstName, String lastName, String CPF, Date birthDate, String address, String phoneNumber, ShirtSize shirtSize, Availability domingo, Availability segunda, Availability terca, Availability quarta, Availability quinta, Availability sexta, Availability sabado, List<Shows> chosenShows) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.CPF = CPF;
        this.birthDate = birthDate;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.shirtSize = shirtSize;
        this.domingo = domingo;
        this.segunda = segunda;
        this.terca = terca;
        this.quarta = quarta;
        this.quinta = quinta;
        this.sexta = sexta;
        this.sabado = sabado;
        this.chosenShows = chosenShows;
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCPF() {
        return CPF;
    }

    public void setCPF(String CPF) {
        this.CPF = CPF;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public ShirtSize getShirtSize() {
        return shirtSize;
    }

    public void setShirtSize(ShirtSize shirtSize) {
        this.shirtSize = shirtSize;
    }

    public Availability getDomingo() {
        return domingo;
    }

    public void setDomingo(Availability domingo) {
        this.domingo = domingo;
    }

    public Availability getSegunda() {
        return segunda;
    }

    public void setSegunda(Availability segunda) {
        this.segunda = segunda;
    }

    public Availability getTerca() {
        return terca;
    }

    public void setTerca(Availability terca) {
        this.terca = terca;
    }

    public Availability getQuarta() {
        return quarta;
    }

    public void setQuarta(Availability quarta) {
        this.quarta = quarta;
    }

    public Availability getQuinta() {
        return quinta;
    }

    public void setQuinta(Availability quinta) {
        this.quinta = quinta;
    }

    public Availability getSexta() {
        return sexta;
    }

    public void setSexta(Availability sexta) {
        this.sexta = sexta;
    }

    public Availability getSabado() {
        return sabado;
    }

    public void setSabado(Availability sabado) {
        this.sabado = sabado;
    }

    public List<Shows> getChosenShows() {
        return chosenShows;
    }

    public void setChosenShows(List<Shows> chosenShows) {
        this.chosenShows = chosenShows;
    }
}
