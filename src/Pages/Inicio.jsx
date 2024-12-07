import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import PeopleWorking from '../Images/WorkingPeople.png';
import GoogleLogo from "../Images/GoogleLogo.png";
import InicioFrame from "../Images/InicioDivisor.png";
import EtiquetaConectar from "../Images/EtiquetaConectar.png";
import EtiquetaDescubrir from "../Images/EtiquetaDescubrir.png";
import EtiquetaLocalizar from "../Images/localizar.png";
import EtiquetaMonitorear from "../Images/EtiquetaMonitorear.png";
import AboutFrame from "../Images/About Frame.png"
import "../Css/index.css";


export default function Inicio() {
    return(
        <div className="inicio-main-div">
            <Header />
            <div className="inicio-div">
                <div className="inicio-presentacion-div">
                    <img src={PeopleWorking} alt="PeopleWorking"/>
                    <h1>La persona ideal para el <br />trabajo que necesitas, <br /><nav>en minutos</nav></h1>
                    <p>Únete a nuestra plataforma y conecta con trabajadores y <br /> empleadores de confianza</p>
                </div>
                <div className="inicio-inputs">
                    <button className="inicio-button-google"><img src={GoogleLogo} alt="GoogleLogo" />Continuar con Google</button>
                    <img src={InicioFrame} alt="InicioFrame" className="inicio-frame"/>
                    <div className="input-data">
                        <div className="input-nombre-apellido">
                            <input type="text" placeholder="Nombre (obligatorio)" />
                            <input type="text" placeholder="Apellido (obligatorio)" />
                        </div>
                        <div className="input-email-contraseña">
                            <input type="text" placeholder="ejemplo@email.com" className="input-email"/>
                            <input type="text" placeholder="Contraseña" className="input-contraseña"/>
                        </div>
                    </div>
                    <div className="input-more-info">
                        <img src="" alt="" />
                        <h3>¿Ya tienes cuenta? Da click <nav>aquí</nav></h3>
                        <p>Al registrarte, aceptas nuestro Aviso de privacidad y consientes el tratamiento de tus datos según lo establecido con nuestros Términos y condiciones.</p>
                        <button>Continuar</button>
                    </div>
                </div>
                <div className="inicio-about">
                    <div className="about-txt">
                        <img src={AboutFrame} alt="About Frame" className="AboutFrame"/>
                        <h3>Desbubre más con JobJoin</h3>
                        <p>Encuentra servicios confiables para resolver tus necesidades</p>
                    </div>
                    <div className="about-images">
                        <div className="about-localizar">
                            <img src={EtiquetaLocalizar} alt="EtiquetaLocalizar" />
                            <p>Localiza <br /> trabajadores <br /> cerca de ti</p>
                        </div>
                        <div className="about-descubrir">
                            <img src={EtiquetaDescubrir} alt="EtiquetaDescubrir" />
                            <p>Descubre <br /> perfiles <br /> detallados</p>
                        </div>
                        <div className="about-conectar">
                            <img src={EtiquetaConectar} alt="EtiquetaConectar" />
                            <p>Conecta con <br /> los mejores <br /> en tu zona</p>
                        </div>
                        <div className="about-monitorear">
                            <img src={EtiquetaMonitorear} alt="EtiquetaMonitorear" />
                            <p>Monitorea el <br /> avance de tus <br /> proyectos contratados</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
