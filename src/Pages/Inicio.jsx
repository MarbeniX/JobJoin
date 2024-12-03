import { Link } from "react-router-dom";
import "../Css/index.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    function Login() {
        navigate("/login");
    }
    function Busar(){
        navigate ("/buscar")
    }
    function Google(){
        navigate("/google")
    }
    function Correo(){
        navigate("/correo")
    }
    return(
        <div className="inicio-main-div">
            <header className="inicio-header">
                <h1 className="inicio-h1 general-h1">JobJoin</h1>
                <button onClick={Login} className="inicio-login-button inicio-header-button">Buscar</button>
                <button onClick={Login} className="inicio-signup-button inicio-header-button">Unirse</button>
            </header>

            <div className="inicio-direccion-div">
                <main className="inicio-direccion-main">
                        <h2 className="inicio-direccion-main-h2">La persona ideal para el trabajo que necesitas, <nav>en minutos</nav></h2>
                    <div className="inicio-direccion-div-ingreso">
                        <button onClick={Login}>Buscar</button> 
                    </div>
                </main>
            </div>
        </div>
    )
}