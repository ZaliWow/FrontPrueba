import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { AuthContext } from "../../context/AuthContex"

export function Navbar(params) {
  const {totalAccountState, totalProductsCart, totalProducts}= useContext(CartContext)
  const {auth} = useContext(AuthContext)
  const navigate = useNavigate()
  return(
        <div className="navbar bg-base-100 text-white bg-black/70 bg-blur backdrop-blur-md w-full z-50 top-0 left-0 fixed py-2bg-black/70 bg-blur backdrop-blur-md w-full z-50 top-0 left-0 fixed py-2">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl" onClick={() => navigate('/')}>Historias y Encantos </a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">{totalProducts}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold text-black">Información de compra</span>
          <span className=" text-info">Valor a cancelar: {totalAccountState}</span>
          <div className="card-actions">
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:4150603196. */}
            <button className="btn btn-primary btn-block" onClick={() => navigate('/carrito')}>Mi Carrito</button>
          </div>
        </div>
      </div>
    </div>
   
     { 
     
    auth.token === null ?
    null
    :
    <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
       <div className="w-10 rounded-full">
         <img
           alt="Tailwind CSS Navbar component"
           src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
       </div>
     </div>
     <ul
       tabIndex={0}
       className="menu menu-sm dropdown-content bg-black/70 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       <li>
         <a className="justify-between" onClick={() => navigate('/catalogo')}>
           Libros
           <span className="badge">Administrar</span>
         </a>
       </li>
       <li><a onClick={() => navigate('/administracion-Autores')} >Autores</a></li>
       <li><a onClick={() => navigate('/administracion-Categorias')}>Categorias</a></li>
     </ul>
     </div> 
    }
  
  </div>
  </div>
    )
}