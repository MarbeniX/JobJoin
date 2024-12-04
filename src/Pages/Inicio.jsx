import { Link } from "react-router-dom";
import Header from "../Components/Header.jsx"
import Footer from "../Components/Footer.jsx"
import "../Css/index.css";
import { useNavigate } from "react-router-dom";
import PeopleWorking from '../Images/WorkingPeople.png'
import GoogleLogo from '../Images/GoogleLogo.png'
import EtiquetaLocalizar from '../Images/localizar.png'
import EtiquetaDescubrir from '../Images/EtiquetaDescubrir.png'
import EtiquetaMonitorear from '../Images/EtiquetaMonitorear.png'
import EtiquetaConectar from '../Images/EtiquetaConectar.png'
import LineaFrame from '../Images/Frame 12.png'
import DividorFrame from '../Images/InicioDivisor.png'


export default function Inicio() {
    const navigate = useNavigate();
    function Google(){
        navigate("/google")
    }
    function Correo(){
        navigate("/correo")
    }
    return(
        <div className="inicio-main-div">
            <Header />
            <div className="inicio-direccion-div">
                <main className="inicio-direccion-main">
                        <img src={PeopleWorking} alt="People workiong" className="PeopleWorking"/>
                        <h2 className="inicio-direccion-main-h2">La persona ideal para el <br/> trabajo que necesitas, <br /> <nav className="inicio-direccion-main-h2-nav">en minutos</nav></h2>
                    <div className="inicio-direccion-div-ingreso">
                        <button onClick={Google} className="inicio-correo-button inicio-google-button"> <img src={GoogleLogo} className="GoogleLogo CorreoLogo" /> Continuar con Google</button> 
                        <img src={DividorFrame} alt="" />
                        <div className="inicio-nombre-apellido">
                            <input type="text" placeholder="Nombre (obligatorio)" className="inicio-nombre-input"/>
                            <input type="text" placeholder="Apellido (obligatorio)" className="inicio-apellido-input"/>
                        </div>
                        <input type="text" placeholder="ejemplo@gmail.com" className="inicio-email"/>
                        <input type="text" placeholder="Contraseña" className="inicio-contraseña"/>
                        <h4 className="inicio-h4">
                            ¿Ya tienes una cuenta? Da click <nav>aquí</nav>
                        </h4>
                        <p className="terminos-condiciones">Al registrarte, aceptas nuestro <nav>Aviso de privacidad</nav> y consientes el tratamiento de tus datos según lo establecido con nuestros <nav>Términos y condiciones</nav>.</p>
                    </div>
                </main>
            </div>
            <div className="about-main-div">
                <img src={LineaFrame} alt="Linea separacion" className="about-frame"/>
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
            <Footer/>
        </div>
    )
}