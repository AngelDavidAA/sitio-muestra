import { Route,Routes } from "react-router";


export default function Navbar(params) {
    return(
   
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active "  href="https://github.com/DavTestFireReact/sitio-muestra.git" >Inicio</a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link active" href="https://davtestfirereact.github.io/reactProyectosApp/" >OTRO</a>
                </li>     */}
                <li className="nav-item">
                    <a className="nav-link " target="_blank" href="https://github.com/DavTestFireReact" >GitHub </a>
                </li>    
                <li className="nav-item">
                    <a className="nav-link" target="_blank" href="https://davtestfirereact.github.io/">CV</a>
                </li>    
            </ul>
    )
}