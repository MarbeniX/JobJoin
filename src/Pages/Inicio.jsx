import { Link } from "react-router-dom";
import "../Css/index.css";
import { useNavigate } from "react-router-dom";
import JobJoinLogo from '../Images/JobJoin.png'
import PeopleWorking from '../Images/WorkingPeople.png'
import GoogleLogo from '../Images/GoogleLogo.png'
import EmailLogo from '../Images/EmailLogo.png'

export default function Header() {
    const navigate = useNavigate();
    function Unirse() {
        navigate("/login");
    }
    function Buscar(){
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
                <img src={JobJoinLogo} alt="JobJoin logo" className="JobJoin-logo"/>
                <button onClick={Buscar} className="inicio-login-button inicio-header-button">Buscar</button>
                <button onClick={Unirse} className="inicio-signup-button inicio-header-button">Unirse</button>
            </header>

            <div className="inicio-direccion-div">
                <main className="inicio-direccion-main">
                        <img src={PeopleWorking} alt="People workiong" className="PeopleWorking"/>
                        <h2 className="inicio-direccion-main-h2">La persona ideal para el <br/> trabajo que necesitas, <br /> <nav className="inicio-direccion-main-h2-nav">en minutos</nav></h2>
                    <div className="inicio-direccion-div-ingreso">
                        <button onClick={Google} className="inicio-correo-button inicio-google-button"> <img src={GoogleLogo} alt="GoogleLogo CorreoLogo" /> Continuar con Google</button> 
                        <button onClick={Correo} className="inicio-correo-button inicio-email-button"> <img src={EmailLogo} alt="EmailLogo CorreoLogo" /> Continuar con Email</button>
                    </div>
                </main>
            </div>
        </div>
    )
}