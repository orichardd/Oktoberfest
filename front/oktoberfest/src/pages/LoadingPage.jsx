import "./LoadingPage.css"
import Header  from "./Header.jsx";

export default function LoadingPage(){
    return (
        <>
            <Header />

        <div className="loadingPage">
            <img src="/icons/icon.png" alt="Carregando..." />
        </div>
        </>
    )
}