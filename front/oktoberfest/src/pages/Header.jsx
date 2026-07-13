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
                    <img src="/icons/icon.png" alt="" />
                </button>
            </header>
            <div className={`about-section ${isAboutVisible ? "show" : ""}`}>
                <h1>Sobre o sistema</h1>
                <p>Este sistema foi desenvolvido voluntariamente para auxiliar a organização e a gestão dos colaboradores da Oktoberfest 2026 de Igrejinha.</p>
                <p>O projeto é mantido de forma independente, sem fins lucrativos, com foco em facilitar o trabalho da equipe organizadora.</p>
                <div className="member-card">
                    <a href="https://pokemondb.net/pokedex/farfetchd"><img src="https://img.pokemondb.net/sprites/black-white/anim/normal/farfetchd.gif" alt="Farfetch'd" /></a>

                    <div>
                        <h3>Richard Almeida</h3>
                        <span>Arquitetura, desenvolvimento e infraestrutura</span>
                        <p>richdd.dev@gmail.com</p>
                    </div>
                </div>

                <div className="member-card">
                    <a href="https://pokemondb.net/pokedex/darumaka"><img src="https://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif" alt="Darumaka" /></a>

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
                    Versão: 0.71
                </p>
            </div>
        </>

    )
}