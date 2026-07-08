import "./Header.css"
import { useState } from "react";

export default function Header() {

    const [isAboutVisible, setIsAboutVisible] = useState(false);

    function handleClick() {
        setIsAboutVisible(!isAboutVisible);
    }

    return (
        <>
            <header className="header">
                <img src="/img/oktoberlogo.png" alt="logo da oktoberfest de igrejinha." />
                <button className="header-button" onClick={handleClick}>
                    Sobre
                </button>
            </header>
            <div className={`about-section ${isAboutVisible ? "show" : ""}`}>
                <h1>Sobre o sistema</h1>
                <p>Esse sistema inteiro foi desenvolvido de forma voluntária para ajudar a Oktoberfest 2026 de Igrejinha.</p>
                <p>Desenvolvimento, manutenção e gestão de servidor: Richard Almeida</p>
                <p>Contato: richdd.dev@gmail.com</p>
                <p>Suporte: Miguel Fulber Gomes</p>
                <p>Contato: miguel.fulber@gmail.com</p>
            </div>
        </>

    )
}