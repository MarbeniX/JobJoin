import { Link } from "react-router-dom";
import "../Css/index.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    function Prueba1() {
        console.log("Prueba1")
        navigate("/login");
    }
    return(
        <div className="inicio-main-div">
            <header className="inicio-header">
                <h1 className="inicio-h1 general-h1">JobJoin</h1>
                <Link to="/login" className="inicio-login-button inicio-header-button">Log in</Link>
                <button onClick={Prueba1} className="inicio-signup-button inicio-header-button">Sign up</button>
            </header>

            <div className="inicio-direccion-div">
                <main className="inicio-direccion-main">
                        <h2 className="inicio-direccion-main-h2">Servicios cerca de ti</h2>
                    <div className="inicio-direccion-div-ingreso">
                        <input type="text" placeholder="Ingresar dirección" className="inicio-direccion-input"/>
                        <button>Buscar</button> 
                    </div>
                </main>
            </div>
        </div>
    )
}