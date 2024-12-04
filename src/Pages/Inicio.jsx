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
            <Footer/>
        </div>
    )
}