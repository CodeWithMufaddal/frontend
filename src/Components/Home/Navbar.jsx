import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
   return (
      <div className="page-center">
         <nav className="navbar ">
            <div className="logo ">
               <Link to="/">
                  <div className="logo__Icon">
                     <img src="./CompanyLogo.png " alt="Burhani IT Care" />
                  </div>
               </Link>
            </div>
            <div className="options">
             

               {/* <Link to="/inwardHistory">
                  <div className="">
                     <span>Inward History</span>
                  </div>
               </Link> */}
            </div>
         </nav>
      </div>
   )
}

export default Navbar