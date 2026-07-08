import "./WorkersPage.css";
import Header from "./Header.jsx";
import workersData from "./api.json";
import { Link } from "react-router-dom";

const DAYS = [
    { key: "domingo", label: "Domingo" },
    { key: "segunda", label: "Segunda" },
    { key: "terca", label: "Terça" },
    { key: "quarta", label: "Quarta" },
    { key: "quinta", label: "Quinta" },
    { key: "sexta", label: "Sexta" },
    { key: "sabado", label: "Sábado" },
];

function formatDate(isoString) {
    return new Date(isoString).toLocaleDateString("pt-BR");
}

export default function WorkersPage() {
    return (
        <>
            <Header />
            <div className="workers-container">
                <div className="workers-return">
                    <Link to="/dashboard" className="return-button">
                        <img src="/icons/share.png" alt="" />
                    </Link>
                    <h1>Colaboradores</h1>
                    <br />
                </div>
                <div>
                    <div className="workers-table-container">
                        <table className="workers-table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Nascimento</th>
                                    <th>Telefone</th>
                                    <th>Email</th>
                                    <th>Camiseta</th>
                                    {DAYS.map((day) => (
                                        <th key={day.key}>{day.label}</th>
                                    ))}
                                    <th>Shows escolhidos</th>
                                </tr>
                            </thead>
                            <tbody>
                                {workersData.map((worker) => (
                                    <tr key={worker.CPF}>
                                        <td>{worker.firstName} {worker.lastName}</td>
                                        <td>{worker.CPF}</td>
                                        <td>{formatDate(worker.birthDate)}</td>
                                        <td>{worker.phoneNumber}</td>
                                        <td>{worker.email}</td>
                                        <td>{worker.shirtSize}</td>
                                        {DAYS.map((day) => {
                                            const shift = worker[day.key];
                                            return (
                                                <td key={day.key}>
                                                    {shift
                                                        ? `${shift.startTime.slice(0, 5)} - ${shift.endTime.slice(0, 5)}`
                                                        : "-"}
                                                </td>
                                            );
                                        })}
                                        <td>{worker.chosenShows.join(", ")}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}