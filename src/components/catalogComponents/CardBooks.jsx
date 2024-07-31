import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { AuthContext } from "../../context/AuthContex"

import { useNavigate } from "react-router-dom"
export function CardBooks({ Book, setNewBook }) {

  const { addToCart, isProductInCart, deleteProductCart } = useContext(CartContext)
  const {auth} = useContext(AuthContext)
 const navigate = useNavigate()
  
  const handleDelete = async(e, id) => {
    e.preventDefault()
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BOOKS}/${id}`,{
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          
      }})
      const data = await response.json();
          console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = async(e, Book) => {
    setNewBook(Book)
    navigate("/editar/libro")
  }
  
  if(auth.token === null )return (
    <div className="card bg-base-100 w-96 h-96 shadow-xl m-4">
      <figure>
        <img
          src={Book.cover_image}
        
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="absolute top-0 right-0 mt-[-10px] mr-[20px] ">
        
          <button 
          className="bg-accent p-2 mx-2 rounded text-white w-10 h-10" 
          onClick={()=>{addToCart(Book)}} >
            +{Book.quantity}
                         </button>
         {
          isProductInCart(Book) ? 
          <button
           className="bg-error p-2 mx-2 rounded text-white w-10 h-10" 
           onClick={()=>{deleteProductCart(Book)}}
           >-</button> : null

         }
        
        
        
         
        </div>
        <h2 className="card-title">
          {Book.title}
          <div className="badge badge-secondary">{Book.price}</div>
        </h2>
      
        <p>{Book.description}</p>
        <p>{Book.author.name}</p>
        <div className="card-actions justify-end">
          {
            Book.categories.map((category) => {
              return (
                <div className="badge badge-outline">{category.type}</div>
              )
            })
          }
        </div>
      </div>
    </div>
  )




  else return(
    <div className="card bg-base-100 w-96 h-96 shadow-xl m-4">
    <figure>
      <img
        src={Book.cover_image}
   
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <div className="absolute top-0 right-0 mt-[-10px] mr-[20px] ">
      
    <div>
         
          <button
          onClick={(e)=>handleUpdate(e, Book)}
           className="btn btn-accent mx-3 "><svg className="h-5 w-5" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>edit [#1479]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-99.000000, -400.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M61.9,258.010643 L45.1,258.010643 L45.1,242.095788 L53.5,242.095788 L53.5,240.106431 L43,240.106431 L43,260 L64,260 L64,250.053215 L61.9,250.053215 L61.9,258.010643 Z M49.3,249.949769 L59.63095,240 L64,244.114985 L53.3341,254.031929 L49.3,254.031929 L49.3,249.949769 Z" id="edit-[#1479]"> </path> </g> </g> </g> </g></svg>
          </button>
          <button
          
          onClick={(e)=>handleDelete(e, Book.id)
          }
          className="btn btn-error "><svg className="h-5 w-5"viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>delete [#1487]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"> </path> </g> </g> </g> </g></svg></button></div>
      
      
      
       
      </div>
      <h2 className="card-title">
        {Book.title}
        <div className="badge badge-secondary">{Book.price}</div>
      </h2>
    
      <p>{Book.description}</p>
      <p>Codigo ISBN: {Book.isbn}</p>
      <p>{Book.author.name}</p>
      <div className="card-actions justify-end">
        {
          Book.categories.map((category) => {
            return (
              <div className="badge badge-outline">{category.type}</div>
            )
          })
        }
      </div>
    </div>
  </div>



  )
}