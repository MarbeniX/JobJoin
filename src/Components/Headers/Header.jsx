import "../../Css/Headers&Footer.css";
import JobJoinLogo from '../../Images/JobJoin.png'
import { Link } from "react-router-dom";

export default function Header() {

    return(
        <header className="inicio-header">
            <img src={JobJoinLogo} alt="JobJoin logo"/>
            <div className="header-links">
                <Link to="/buscar-sin-registro" className="inicio-login-button inicio-link">Buscar</Link>
                <Link to="/login" className="inicio-signup-button inicio-link">Iniciar sesión</Link>
            </div>
        </header> 
    )
}