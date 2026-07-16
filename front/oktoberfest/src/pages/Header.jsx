import "./Header.css"
import { useState } from "react";

export default function Header() {

    const [isAboutVisible, setIsAboutVisible] = useState(false);

    function handleClick() {
        setIsAboutVisible(!isAboutVisible);
    }

    const handleOutsideClick = (event) => {
        if (isAboutVisible && !event.target.closest('.about-section') && !event.target.closest('.header-button')) {
            setIsAboutVisible(false);
        }
    }

    document.addEventListener('click', handleOutsideClick);

    return (
        <>
            <header className="header">
                <img src="/img/oktoberlogo.png" alt="logo da oktoberfest de igrejinha." />
                <button className="regularButton header-button" onClick={handleClick}>
                    <img src="/icons/icon.png" alt="" />
                </button>
            </header>
            <div className={`about-section ${isAboutVisible ? "show" : ""}`}>
                <h1>Sobre o sistema</h1>
                <p>Este sistema foi desenvolvido voluntariamente para auxiliar a organização dos Amigos da Bilheteria, uma comunidade dedicada a apoiar a eventos locais.</p>
                <p>O projeto é mantido de forma independente, sem fins lucrativos, com foco em facilitar o trabalho da equipe organizadora.</p>
                <h3>Desenvolvido por:</h3>
                <div className="member-card">
                    <a href="https://pokemondb.net/pokedex/farfetchd">
                        <img
                            src="img/farfetchd.gif"
                            alt="Farfetch'd"
                        />
                    </a>
                    <div>
                        <h3>Richard Almeida</h3>
                        <span>Arquitetura, desenvolvimento e infraestrutura</span>
                        <p>richdd.dev@gmail.com</p>
                    </div>
                </div>

                <div className="member-card">
                    <a href="https://pokemondb.net/pokedex/psyduck">
                        <img
                            src="img/psyduck.gif"
                            alt="Psyduck"
                        />
                    </a>
                    <div>
                        <h3>Miguel Fulber Gomes</h3>
                        <span>Suporte</span>
                        <p>miguel.fulber.gomes@gmail.com</p>
                    </div>
                </div>
                <p className="system-purpose">
                    Desenvolvido para uso interno da organização da Oktoberfest 2026 de Igrejinha.
                </p>
                <p>
                    Versão: 0.82
                </p>
            </div>
        </>

    )
}