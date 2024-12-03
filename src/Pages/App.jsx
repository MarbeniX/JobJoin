import Inicio from "./Inicio" 
import Login from "./LogIn"
import Header from "../Components/Header"
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
export default function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/" elemenet={<Header/>}/>
            </Routes>
        </Router>
    )   
}