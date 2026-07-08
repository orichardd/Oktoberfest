import './AddPage.css';
import Header from "./Header.jsx"
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function AddPage() {

    const [link, setLink] = useState(false);
    const [copy, setCopy] = useState(false);
    const [url, setUrl] = useState("");

    function handleAddClick() {
        setLink(!link);
        setUrl("asodhaoisao");
    }

    function handleCopyClick() {
        navigator.clipboard.writeText(url);
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 2000);
    }

    function handleShareClick() {
        if (navigator.share) {
            navigator.share({
                title: "Link de cadastro",
                text: "Use este link para se cadastrar:",
                url: { url }
            }).catch((error) => {
                console.log("Compartilhamento cancelado ou falhou", error);
            });
        } else {
            navigator.clipboard.writeText(url);
            setCopy(true);
            setTimeout(() => setCopy(false), 2000);
        }
    }

    return (
        <>
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
                            <p>{url}</p>
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
        </>
    );
}