import Header from "./Header.jsx";
import "./Add.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { post } from "../api.js";

export default function Add({ isManager }) {
    const { code } = useParams();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [cpf, setCpf] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [size, setSize] = useState("P");
    const [chosenShows, setChosenShows] = useState([]);

    const sizes = ["P", "PP", "M", "G", "GG", "XG", "XXG", "ESPECIAL"];

    const shows = [
        { value: "SIMONE_MENDES", label: "Simone Mendes" },
        { value: "DI_FERRERO", label: "Di Ferrero" },
        { value: "TURMA_DO_PAGODE_TRAIA_VEIA", label: "Turma do Pagode + Traia Véia" },
        { value: "GUILHERME_E_BENUTO", label: "Guilherme & Benuto" },
        { value: "ACUSTICOS_E_VALVULADOS", label: "Acústicos & Valvulados" },
        { value: "VOXXCLUB_ALOK", label: "Voxxclub + Alok" },
    ];
    function handleShowChange(show) {
        if (chosenShows.includes(show)) {
            setChosenShows(chosenShows.filter((s) => s !== show));
        } else {
            setChosenShows([...chosenShows, show]);
        }
    }

    const days = [
        { key: "quinta", label: "Quinta" },
        { key: "sexta", label: "Sexta" },
        { key: "sabado", label: "Sábado" },
        { key: "domingo", label: "Domingo" }
    ];

    const [availability, setAvailability] = useState({
        domingo: { startTime: "", endTime: "" },
        segunda: { startTime: "", endTime: "" },
        terca: { startTime: "", endTime: "" },
        quarta: { startTime: "", endTime: "" },
        quinta: { startTime: "", endTime: "" },
        sexta: { startTime: "", endTime: "" },
        sabado: { startTime: "", endTime: "" },
    });

    function handleAvailabilityChange(day, field, value) {
        setAvailability((prev) => ({
            ...prev,
            [day]: {
                ...prev[day],
                [field]: value,
            },
        }));
    }

    function normalizeAvailability(day, dayName) {
        const hasStart = day.startTime.trim() !== "";
        const hasEnd = day.endTime.trim() !== "";

        // Nenhum horário informado
        if (!hasStart && !hasEnd) {
            return null;
        }

        // Apenas um dos horários informado
        if (hasStart !== hasEnd) {
            throw new Error(
                `Preencha os horários de início e fim para ${dayName} ou deixe ambos vazios.`
            );
        }

        return {
            startTime: day.startTime,
            endTime: day.endTime,
        };
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const worker = {
                firstName: name,
                lastName: surname,
                CPF: cpf,
                birthDate,
                address,
                phoneNumber,
                email,
                shirtSize: size,

                quinta: normalizeAvailability(availability.quinta, "Quinta"),
                sexta: normalizeAvailability(availability.sexta, "Sexta"),
                sabado: normalizeAvailability(availability.sabado, "Sábado"),
                domingo: normalizeAvailability(availability.domingo, "Domingo"),


                chosenShows,
            };

            if (isManager) {
                await post(`/worker/create`, worker);
            }
            else {
                await post(`/public/create?code=${code}`, worker);

            }

            alert("Inscrição realizada com sucesso!");
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            } else {
                console.error(error);
                alert("Erro ao enviar inscrição.");
            }
        }
    }


    return (
        <div className="page">
            <Header />

            <form className="add-form" onSubmit={handleSubmit}>

                <div className="add-form-header">
                    {isManager ? (
                        <a href="/dashboard" className="return-button">
                            <img src="/icons/share.png" alt="" />
                        </a>
                    ) : null}
                    <h1>Inscrever-se</h1>
                </div>
                <input
                    type="text"
                    placeholder="Nome"
                    className="add-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Sobrenome"
                    className="add-input"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="CPF"
                    className="add-input"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />

                <input
                    type="date"
                    className="add-input"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Endereço"
                    className="add-input"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Telefone"
                    className="add-input"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="E-mail"
                    className="add-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className="add-input">
                    <select
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                    >
                        {sizes.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </div>

                <h2>Disponibilidade</h2>

                {days.map((day) => (
                    <div key={day.key} className="availability-row">
                        <label>{day.label}</label>

                        <div className="time-group">
                            <input
                                type="time"
                                value={availability[day.key].startTime}
                                onChange={(e) =>
                                    handleAvailabilityChange(day.key, "startTime", e.target.value)
                                }
                            />
                            <span className="time-sep">até</span>
                            <input
                                type="time"
                                value={availability[day.key].endTime}
                                onChange={(e) =>
                                    handleAvailabilityChange(day.key, "endTime", e.target.value)
                                }
                            />
                        </div>
                    </div>
                ))}
                <h2>Shows de preferência</h2>

                <div className="shows-container">
                    {shows.map((show) => (
                        <label key={show.value} className="show-option">
                            <input
                                type="checkbox"
                                checked={chosenShows.includes(show.value)}
                                onChange={() => handleShowChange(show.value)}
                            />
                            {show.label}
                        </label>
                    ))}
                </div>

                <button className="add-button" type="submit">
                    Inscrever-se
                </button>
            </form>
        </div>
    );
}