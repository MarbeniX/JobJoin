import "../Css/index.css"

export default function Login(){
    return(
        <div className="login-main-div">
            <header className="login-header">
                <h1 className="login-h1 general-h1">JobJoin</h1>
            </header>

            <div className="login-correo-div">
                <h2 className="login-correo-h2">¿Cuál es tu correo?</h2>
                <input type="text" placeholder="Ingresa tu correo" className="login-correo-input"/>
                <button className="login-correo-button">Continuar</button>
            </div>
        </div>
    )
}