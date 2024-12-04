import "../Css/index.css";
import JobJoinLogo from '../Images/JobJoin.png'
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header className="inicio-header">
            <img src={JobJoinLogo} alt="JobJoin logo" className="JobJoin-logo"/>
            <Link  to="/Buscar" className="inicio-login-button inicio-header-button">Buscar</Link>
            <Link  to="/IniciarSesion" className="inicio-signup-button inicio-header-button">Iniciar sesión</Link>
        </header>
    )
}