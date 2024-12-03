import { Link } from "react-router-dom";
import "../Css/index.css";
import { useNavigate } from "react-router-dom";
import JobJoinLogo from '../Images/JobJoin.png'
import PeopleWorking from '../Images/WorkingPeople.png'
import GoogleLogo from '../Images/GoogleLogo.png'
import EmailLogo from '../Images/EmailLogo.png'
import EtiquetaLocalizar from '../Images/localizar.png'
import EtiquetaDescubrir from '../Images/EtiquetaDescubrir.png'
import EtiquetaMonitorear from '../Images/EtiquetaMonitorear.png'
import EtiquetaConectar from '../Images/EtiquetaConectar.png'

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
                        <button onClick={Google} className="inicio-correo-button inicio-google-button"> <img src={GoogleLogo} className="GoogleLogo CorreoLogo" /> Continuar con Google</button> 
                        <button onClick={Correo} className="inicio-correo-button inicio-email-button"> <img src={EmailLogo} className="EmailLogo CorreoLogo" /> Continuar con Email</button>
                    </div>
                </main>
            </div>

            <div className="about-main-div">
                <h3 className="about-main-h3">Descubre más con JobJoin</h3>
                <p>Encuentra servicios confiables para resolver tus necesidades</p>
            </div>
        
            <div className="about-images">
                <div className="about-images-localizar">
                    <img src={EtiquetaLocalizar} alt="Etiqueta localizar"/>
                    <p>Localiza <br />trabajadores <br />cerca de ti.</p>
                </div>
                <div className="about-iamges-descubrir">
                    <img src={EtiquetaDescubrir} alt="Etiqueta descubrir" />
                    <p>Descubre <br />perfiles <br />detallados.</p>
                </div>
                <div className="about-images-conectar">
                    <img src={EtiquetaConectar} alt="Etiqueta conectar" />
                    <p>Conecta con <br />los mejores <br />en tu zona</p>
                </div>
                <div className="about-iamges-monitorear">
                    <img src={EtiquetaMonitorear} alt="Etiqueta monitorear" />
                    <p>Monitorea el <br />avance de tus <br /> proyectos <br /> contratados.</p>
                </div>
            </div>

            <footer className="inicio-footer">
                <div className="inicio-footer-div1">
                    <div className="inicio-footer-div1-JobJoin">
                        <h3>JobJoin</h3>
                        <p>Acerca de</p>
                        <p>Contacto</p>
                    </div>
                    <div className="inicio-footer-div1-Informacion">
                        <h3>Información</h3>
                        <p>Terminos y condiciones</p>
                        <p>Politica de privacidad</p>
                        <p>Preguntas y condiciones</p>
                    </div>
                </div>
                <div className="inicio-footer-div2">
                    <div className="inicio-footer-div2-empleadores">
                        <h3>Empleadores</h3>
                        <p>Como contratar</p>
                        <p>Beneficios</p>
                    </div>
                    <div className="inicio-footer-div2-trabajadores">
                        <h3>Trabajadores</h3>
                        <p>Beneficios</p>
                    </div>
                    <div className="inicio-footer-div2-soporte">
                        <h3>Soporte</h3>
                        <p>Ayuda</p>
                        <p>Reportar un problema</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}