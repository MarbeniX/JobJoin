import Header from "../Components/Headers/HeaderSesiónIniciada";
import Footer from "../Components/Footer"
import TrabajoActivoStatus from "../Components/TrabajoActivoStatus";
import Frame from "../Images/InicioDivisor.png"

export default function TrabajoActivo(){
    return(
        <>
            <Header />
            <h1>Trabajo activo</h1>
            <TrabajoActivoStatus />
            <img src={Frame} alt="Frame" />
            <Footer />
        </>
    )
}