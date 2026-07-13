import Header from "./Header";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import './Dashboard.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { get } from "../api.js";

// Hook para acompanhar a largura da tela em tempo real
function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}

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
    const windowWidth = useWindowWidth();

    const isMobile = windowWidth < 480;
    const isTablet = windowWidth < 1200;

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
                Object.entries(data).forEach(([show, quantidade]) => {
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
                        <h1>{workerCount === null ? <img src="/icons/loading.png" alt=" " /> : workerCount}</h1>
                        <p>Cadastrados</p>
                    </div>
                    <div className="dashboard-up shows">
                        <h1>{showCount === null ? <img src="/icons/loading.png" alt=" " /> : showCount}</h1>
                        <p>Shows sem ninguem</p>
                    </div>
                </div>

                <div className="dashboard-item dashboard-graph">
                    <ResponsiveContainer width="100%" height={isMobile ? 300 : isTablet ? 230 : 300}>
                        <BarChart
                            data={showsData}
                            margin={{ top: 5, right: 10, left: isMobile ? -20 : 0, bottom: isMobile ? 40 : 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                            <XAxis
                                dataKey="show"
                                tick={{ fontSize: isMobile ? 0 : 12 }}
                                interval={0}
                                angle={isMobile ? -45 : isTablet ? -15 : 0}
                                textAnchor={isMobile ? "end" : "middle"}
                                height={isMobile ? 60 : 30}
                            />
                            <YAxis allowDecimals={false} tick={{ fontSize: isMobile ? 10 : 12 }} width={isMobile ? 25 : isTablet ? 25 : 40} />
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