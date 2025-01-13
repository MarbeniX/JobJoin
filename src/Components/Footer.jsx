import "../Css/Headers&Footer.css";

export default function Footer() {
    return (
        <footer className="inicio-footer">
            <div className="footer-info">
                <h5>JobJoin</h5>
                <a href="#">Acerca de</a>
                <a href="#">Contacto</a>
            </div>
            <div className="footer-info">
                <h5>Información</h5>
                <a href="#">Términos y condiciones</a>
                <a href="#">Política de privacidad</a>
                <a href="#">Preguntas y condiciones</a>
            </div>
            <div className="footer-info">
                <h5>Empleados</h5>
                <a href="#">Cómo contratar</a>
                <a href="#">Beneficios</a>
            </div>
            <div className="footer-info">
                <h5>Trabajadores</h5>
                <a href="#">Beneficios</a>
            </div>
            <div className="footer-info">
                <h5>Soporte</h5>
                <a href="#">Ayuda</a>
                <a href="#">Reportar un problema</a>
            </div>
        </footer>
    );
}
