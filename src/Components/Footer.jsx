import "../Css/index.Css"

export default function Footer() {
    return(
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
    )
}