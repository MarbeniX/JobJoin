import Header from "../Components/Headers/HeaderSoloBuscar"
import Footer from "../Components/Footer"
import GoogleLogo from "../Images/GoogleLogo.png";
import InicioFrame from "../Images/InicioDivisor.png";
import { Link } from "react-router-dom";
import "../Css/Login.css";



export default function Login(){
    return(
        <>
            <Header />
            <div className="login-container">
                <p className="login-container-p1">¡Bienvenido de nuevo!</p>
                <p>Nos alegra verte de nuevo. Accede a tu cuenta, conecta con <br /> personas y gestiona tus contrataciones fácilemente</p>
                <button type="button" className="login-container-google-button">
                    <img src={GoogleLogo} alt="GoogleLogo" />
                    Continuar con Google
                </button>
                <img src={InicioFrame} alt="InicioFrame" className="login-inicio-frame" />
                <form className="login-form">
                    <input type="text" placeholder="ejemplo@email.com"/>
                    <input type="text" placeholder="Contraseña"/>
                    <button>Continuar</button>
                </form>
                <p>¿No tienes una cuenta? Da click <Link className="login-link">aquí</Link></p>
                <p>¿Olvidaste tu contraseña? Da click <Link className="login-link">aquí</Link></p>
            </div>
            <Footer />
        </>
    )
}