import { BrowserRouter as Router ,NavLink,Route,Routes } from "react-router-dom";
import Curriculum from "./curriculum";
import Calculator from "./temperatura";

export default function Sidebar(params) {
    return(
    <Router>
            <Routes>
                <Route path="/cv" element={<Curriculum></Curriculum>}></Route>
                <Route path="/temp" element={<Calculator></Calculator>}></Route>
                {/* <Route path="/personajes" element={}></Route> */}
            </Routes>
                <ul className="nav nav-pills nav-stacked">
                    <li >
                        <NavLink className=" m-2 nav-link active" to="/temp">Convertir °F - °C</NavLink>
                    </li>
                    <li >
                        <NavLink className=" m-2 nav-link active" to="/">Conversion °F - °C</NavLink>
                    </li>
                    <li >
                        <NavLink className=" m-2 nav-link active" to="/">Conversion °F - °C</NavLink>
                    </li>
                </ul>
        </Router>
    )
}