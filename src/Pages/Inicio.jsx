import { useNavigate } from "react-router-dom";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import PeopleWorking from '../Images/WorkingPeople.png';
import GoogleLogo from '../Images/GoogleLogo.png';


export default function Inicio() {
    const navigate = useNavigate();
    function Google() {
        navigate("/google");
    }
    function Correo() {
        navigate("/correo");
    }
    return (
        <div className="inicio-main-div">
            <Header />
            <div className="inicio-direccion-div">
                <main className="inicio-direccion-main">
                    <img src={PeopleWorking} alt="People working" className="PeopleWorking" />
                    <h2 className="inicio-direccion-main-h2">
                        La persona ideal para el <br /> trabajo que necesitas, <br />
                        <nav className="inicio-direccion-main-h2-nav">en minutos</nav>
                    </h2>
                    <div className="inicio-direccion-div-ingreso">
                        <button
                            onClick={Google}
                            className="inicio-correo-button inicio-google-button"
                        >
                            <img src={GoogleLogo} className="GoogleLogo CorreoLogo" />
                            Continuar con Google
                        </button>
                        <button
                            onClick={Correo}
                            className="inicio-correo-button inicio-email-button"
                        >
                            Continuar con Email
                        </button>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
