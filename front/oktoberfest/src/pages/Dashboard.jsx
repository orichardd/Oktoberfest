import Header from "./Header";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import './Dashboard.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { get } from "../api.js";

export default function Dashboard() {

    const showNames = {
        SIMONE_MENDES: "Simone Mendes",
        DI_FERRERO: "Di Ferrero",
        TURMA_DO_PAGODE_TRAIA_VEIA: "TurmaPagode + TraiaVéia",
        GUILHERME_E_BENUTO: "Guilherme & Benuto",
        ACUSTICOS_E_VALVULADOS: "Acústicos & Valvulados",
        VOXXCLUB_ALOK: "Voxxclub + Alok",
    };

    const [showsData, setShowsData] = useState([]);
    const [workerCount, setWorkerCount] = useState(null);
    const [showCount, setShowCount] = useState(null);

    useEffect(() => {
        const fetchWorkerCount = async () => {
            try {
                const count = await get("/worker/count");
                setWorkerCount(count);
            } catch (error) {
                console.error("Erro ao buscar contagem de colaboradores:", error);
            }
        };

        const fetchShowCount = async () => {
            try {
                const count = await get("/show/count");
                setShowCount(count);
            } catch (error) {
                console.error("Erro ao buscar contagem de shows:", error);
            }
        };

        const fetchShowsData = async () => {
            try {
                const data = await get("/worker/countPerShow");
                let count = 0;
                Object.entries(data).forEach(([quantidade]) => {
                    if(quantidade === 0) {
                        count++;
                    }
                });
                setShowCount(count);

                const chartData = Object.entries(data).map(([show, quantidade]) => ({
                    show: showNames[show],
                    colaboradores: quantidade,
                }));

                setShowsData(chartData);
            } catch (error) {
                console.error("Erro ao buscar dados de shows:", error);
            }
        };

        fetchShowsData();
        fetchWorkerCount();
        fetchShowCount();
    }, []);

    return (
        <div className="page">
            <Header />
            <div className="dashboard-container">
                <div className="dashboard-item dashboard-stats">
                    <div className="dashboard-up cadastrados">
                        <p></p>
                        <h1>{workerCount === null ? <img src="/icons/loading.png" alt=" " /> : workerCount}</h1>
                        <p>Cadastrados</p>
                    </div>
                    <div className="dashboard-up shows">
                        <p></p>
                        <h1>{showCount === null ? <img src="/icons/loading.png" alt=" " /> : showCount}</h1>
                        <p>Shows sem ninguem</p>
                    </div>
                </div>

                <div className="dashboard-item dashboard-graph">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={showsData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                            <XAxis dataKey="show" />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                            <Bar dataKey="colaboradores" fill="var(--primary)" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="dashboard-item dashboard-buttons">
                    <Link className="dashboard-button" to="/workers">
                        Ver Colaboradores
                    </Link>
                    <Link to="/add" className="dashboard-button">
                        Adicionar Colaborador
                    </Link>
                </div>
            </div>
        </div>
    )
}