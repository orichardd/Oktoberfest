import Header from "./Header.jsx"
import './LoginPage.css'
import { useState } from "react";
import { login } from "../api.js";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){

    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
    e.preventDefault();
    try {
        await login(password);
        
        navigate("/dashboard");
    } catch (error) {
        console.error("Falha ao logar, mantendo na página.", error);
    }
}

    return (
        <div className="page">
            <Header />
            <div className="login-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}> 
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        className="login-input" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="regularButton login-button">
                        <img src="/icons/right-arrow.png" alt="" />
                    </button>
                </form>
                <br />
            </div>
        </div>
    )
}