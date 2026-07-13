import './AddPage.css';
import Header from "./Header.jsx"
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { get } from "../api.js";

export default function AddPage() {

    const [link, setLink] = useState(false);
    const [copy, setCopy] = useState(false);
    const [url, setUrl] = useState(null);
    const thisUrl = window.location.origin + "/";


    function handleAddClick() {
        setLink(!link);
    }


    async function handleCopyClick() {
    const completeUrl = thisUrl + "code/" + url;
    try {
        await navigator.clipboard.writeText(completeUrl);
        setCopy(true);
        setTimeout(() => setCopy(false), 2000);
    } catch (error) {
        console.error("Erro ao copiar:", error);
        alert("Não foi possível copiar o link. Verifique se o site está em HTTPS.");
    }
}

async function handleShareClick() {
    const completeUrl = thisUrl + "code/" + url;

    if (navigator.share) {
        try {
            await navigator.share({
                title: "Link de cadastro",
                text: "Use este link para se cadastrar:",
                url: completeUrl
            });
        } catch (error) {
            console.log("Compartilhamento cancelado ou falhou", error);
        }
    } else {
        try {
            await navigator.clipboard.writeText(completeUrl);
            setCopy(true);
            setTimeout(() => setCopy(false), 2000);
        } catch (error) {
            console.error("Erro ao copiar:", error);
            alert("Não foi possível copiar o link. Verifique se o site está em HTTPS.");
        }
    }
}

    useEffect(() => {

        const fetchUrl = async () => {
            try {
                const count = await get("/code/generate");
                setUrl(count);
            } catch (error) {
                console.error("Erro ao buscar contagem de colaboradores:", error);
            }
        };

        fetchUrl();
    }, []);

    return (
        <div className="page">
            <Header />
            <div className="addPage-container">
                <div className="addPage-return">
                    <Link to="/dashboard" className="return-button">
                        <img src="/icons/share.png" alt="" />
                    </Link>
                </div>
                <h1>Adicionar Colaborador</h1>
                <div className="addPage-buttons">
                    <Link to="/create" className="addPage-button">Adicionar Colaborador</Link>
                    <button onClick={handleAddClick} className="addPage-button">Gerar Link</button>
                </div>
            </div>
            {link && (
                <div className="create-link-outer">
                    <div className="create-link">
                        <div className="create-link-header">
                            <br />
                            {copy && <p className="create-link-copied">Link copiado!</p>}
                            <button onClick={handleAddClick} className="create-link-close"><img src="/icons/close.png" alt="" /></button>
                        </div>
                        <div className="create-link-content">
                            {
                                url === null ? (
                                    <img className="loading" src="/icons/loading.png" alt="" />
                                ) : (
                                    <p>{thisUrl + "code/" + url}</p>
                                )
                            }
                            <div className="create-link-buttons">
                                <button onClick={handleCopyClick} className="create-link-copy">
                                    <img src="/icons/copy.png" alt="" />
                                </button>
                                <button onClick={handleShareClick} className="create-link-share">
                                    <img src="/icons/share.png" alt="" />
                                </button>
                            </div>
                        </div>
                        <br />

                    </div>
                </div>
            )}
        </div>
    );
}