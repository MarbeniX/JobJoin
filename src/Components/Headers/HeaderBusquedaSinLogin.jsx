import JobJoinLogo from "../../Images/JobJoin.png";

export default function HeaderBusquedaSinLogin(){
    return(
        <div className="headerBusquedaSinLogin">
            <img src={JobJoinLogo} alt="JobJoinLogo" />
            <div>
                <button className='IniciarSesión-button'>Iniciar seción</button>
                <button className='Unirse-button'>Unirse</button>
            </div>
        </div>
    )
}