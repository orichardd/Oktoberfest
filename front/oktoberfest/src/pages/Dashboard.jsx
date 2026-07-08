import Header from "./Header";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import './Dashboard.css'
import { Link } from "react-router-dom";

export default function Dashboard() {

    // Isso viria da sua API (endpoint que conta colaboradores por show)
    const dadosShows = [
        { show: "Carlos e Roberto", colaboradores: 12 },
        { show: "João e Maria", colaboradores: 8 },
        { show: "Nigger", colaboradores: 15 },
        { show: "Alok", colaboradores: 3 },
    ];

    return (
        <>
            <Header />
            <div className="dashboard-container">
                <div className="dashboard-item dashboard-stats">
                    <div className="dashboard-up cadastrados">
                        <p></p>
                        <h1>1</h1>
                        <p>Cadastrados</p>
                    </div>
                    <div className="dashboard-up shows">
                        <p></p>
                        <h1>0</h1>
                        <p>Shows sem ninguem</p>
                    </div>
                </div>

                <div className="dashboard-item dashboard-graph">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={dadosShows}>
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
        </>
    )
}