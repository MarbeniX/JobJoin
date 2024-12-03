import "../Css/index.css";
import JobJoinLogo from '../Images/JobJoin.png'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    function Unirse() {
        navigate("/login");
    }
    function Buscar(){
        navigate ("/buscar")
    }
    return(
        <header className="inicio-header">
            <img src={JobJoinLogo} alt="JobJoin logo" className="JobJoin-logo"/>
            <button onClick={Buscar} className="inicio-login-button inicio-header-button">Buscar</button>
            <button onClick={Unirse} className="inicio-signup-button inicio-header-button">Unirse</button>
        </header>
    )
}