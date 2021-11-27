
  import { useState } from "react";
import Sidebar from './sidebar';
import Navbar from './navbar';

export default function App2(params) {
        return(
         
        <>
        {/* Navbar */}
         <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container">
                {<Navbar/>}
            </div>
        </nav>
        
        {/* Sidebar */}
        <div className="container mt-2">
            <div className="row">
                <div className="col-sm-9">
                    <div className="container">
                        <div className="col-md-6">
                            {<Sidebar/>}
                        </div>
                    </div>    
                    <hr className="d-sm-none"/>
                </div>
               
               {/* PAGINAS */}
                <div className="col-sm-3">

                </div> 
            </div>
        </div>
        <div className="mt-5 p-4 bg-dark text-white text-center">
            <p>Sitio Muestra David 2021 </p>
        </div>
    </>
    )
}



