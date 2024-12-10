import "../Css/FooterHeaderInicio.css";

export default function Footer() {
    return(
        <footer className="inicio-footer">
            <div className="footer-info">
                <h4>JobJoin</h4>
                <p>Acerca de</p>
                <p>Contacto</p>
            </div>
            <div className="footer-info">
                <h4>Información</h4>
                <p>Términos y condiciones</p>
                <p>Política de privacidad</p>
                <p>Preguntas y condiciones</p>
            </div>
            <div className="footer-info">
                <h4>Empleados</h4>
                <p>Cómo contratar</p>
                <p>Beneficios</p>
            </div>
            <div className="footer-info">
                <h4>Trabajadores</h4>
                <p>Beneficios</p>
            </div>
            <div className="footer-info">
                <h4>Soporte</h4>
                <p>Ayuda</p>
                <p>Reportar un problema</p>
            </div>
        </footer>
    )
}