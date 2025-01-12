import JobJoinLogo from "../../Images/JobJoin.png";
import { useNavigate } from "react-router-dom";

export default function HeaderBusquedaSinLogin(){

    const navigate = useNavigate();
    
    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSignupClick = () => {
        navigate('/');
    };

    return(
        <div className="headerBusquedaSinLogin">
            <img src={JobJoinLogo} alt="JobJoinLogo" />
            <div>
                <button className='IniciarSesión-button' onClick={handleLoginClick}>Iniciar seción</button>
                <button className='Unirse-button' onClick={handleSignupClick}>Unirse</button>
            </div>
        </div>
    )
}