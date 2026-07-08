import Header from "./Header.jsx"
import './Add.css'

export default function Add() {

    const sizes = ["P", "PP", "M", "G", "GG", "XG", "XXG", "ESPECIAL"];


    return (
        <>
            <Header />
            <form className="add-form">
                <h1>Inscrever-se</h1>
                <input type="text" placeholder="Nome" className="add-input" />
                <input type="text" placeholder="Sobrenome" className="add-input" />
                <input type="text" placeholder="CPF" className="add-input" />
                <input type="date" placeholder="Data de Nascimento" className="add-input" />
                <input type="text" placeholder="Endereço" className="add-input" />
                <input type="text" placeholder="E-mail" className="add-input" />
                <div className="add-input">
                    <select >
                        {sizes.map(size => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="add-button" type="submit">Inscrever-se</button>
            </form>
        </>
    )
}