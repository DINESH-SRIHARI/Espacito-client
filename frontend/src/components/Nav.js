import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Modal from "../Modal";
import Cart from "../pages/Cart";
import { useCart } from "./Contexred";
export default function Nav() {
  const [cartview,setcartview]=useState(false)
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("authToken")
    navigate("/login")
  }
  let data=useCart();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Esposito</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          
        </li>
        {(localStorage.getItem("authToken"))?
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/allordersmy"> MyOrders</Link>
      </li>:""}
      </ul>
      {(localStorage.getItem("authToken"))?
      <div className="d-flex">
                <div className="btn  text-dark mx-1 bg-dark" aria-current="page" onClick={()=>{setcartview(true)}}>🛒
                <h6
  className="bg-danger text-white rounded-circle p-1"
  style={{ fontSize: "12px", marginTop: "-30px" }}
>
  {data.length>9?"9+":data.length}
</h6>

                  </div>
                  {cartview? <Modal onClose={()=>setcartview(false)}><Cart/></Modal>:null}
                 <Link className="btn  text-dark mx-1 bg-dark" to={`/myprofile/${localStorage.getItem('uid')}`}
><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="warning" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg></Link> 
        <div className="btn bg-dark text-danger mx-1" onClick={handleLogout}>Logout</div>
        </div>
      : <div className="d-flex">
      
      <Link className="btn bg-dark text-warning mx-1" to="/login">login</Link>
      <Link className="btn bg-dark text-warning " to="/createuser">SignUp</Link>
    </div>}

     
    </div>
  </div>
</nav>

    </div>
  )
}
