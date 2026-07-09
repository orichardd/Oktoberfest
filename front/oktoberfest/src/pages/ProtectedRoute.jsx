import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { get, removeToken } from "../api";
import "./ProtectedRoute.css";

export default function ProtectedRoute({ children }) {

    const [loading, setLoading] = useState(true);
    const [valid, setValid] = useState(false);

    useEffect(() => {
        async function validate() {
            try {
                await get("/worker/validate");
                setValid(true);
            } catch {
                removeToken();
                setValid(false);
            } finally {
                setLoading(false);
            }
        }

        validate();
    }, []);

    if (loading) {
        return <div className="loading-container">
            <img src="/icons/icon.png" alt="Carregando..." />
        </div>;
    }

    if (!valid) {
        return <Navigate to="/login" replace />;
    }

    return children;
}