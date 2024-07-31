import { useState, useEffect } from "react"
import { useApiStatus } from "../../hooks/useApiStatus"


export function CrudCategories(params) {
    const [categories,setCategories]=useState([])
    const {handleApiStatus}=useApiStatus()
  
    const [newCategory, setNewCategory]=useState({

    })    
const handleChange = (e) => {
    setNewCategory({
        ...newCategory,
        type: e.target.value
    })
}
    
    const handleDelete = async (e, id) => {
      e.preventDefault()
  
        try {
          handleApiStatus("enviando...")
          const response = await fetch(`${import.meta.env.VITE_API_CATEGORIES}/${id}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(categories)
          })
          const data = await response.json();
          handleApiStatus("enviado")
        } catch (error) {
          handleApiStatus("error")
        }
    
      }
  
  
  
    useEffect(()=>{
    const fetchData=async()=>{
        try {
            const response = await fetch(import.meta.env.VITE_API_CATEGORIES)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
           setCategories(result) 

            console.log(result)
        } catch (error) {
            console.log(error)
        }
        finally {
           
        }
       }
       fetchData()
    },[])
    const handleUpdate = async (e, id) => {
      try {
        handleApiStatus("enviando...")
          const response = await fetch(`${import.meta.env.VITE_API_CATEGORIES}/${id}`, {
              method: 'PUT',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(newCategory)
          })
          const data = await response.json();
         handleApiStatus("enviado")
      } catch (error) {
          handleApiStatus("error")
      }
  }





    return(
        <div className="w-full h-fill pb-16 flex justify-center items-center text-white">

<div className="overflow-x-auto text-white">
  <table className="table text-white">
    {/* head */}
    <thead>
      <tr>
        <th className="text-white text-2xl">id</th>
        <th className="text-white text-2xl">Tipo</th>
        <th className="text-white text-2xl">Editar</th>
        <th className="text-white text-2xl">Borrar</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
    
    categories.map((category) =>{
        return <tr>
        <th className="text-xl" >{category.id}</th>
        <td className="text-xl text-black" ><input type="" placeholder={category.type} onChange={handleChange} className="input input-bordered w-full max-w-xs" /></td>
        <td> <button className="btn btn-accent " onClick={(e)=>handleUpdate(e, category.id)}>update</button></td>
     
     
     
        <td><button
        onClick={(e)=>handleDelete(e,category.id)}
        className="btn btn-error "><svg className="h-5 w-5"viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>delete [#1487]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"> </path> </g> </g> </g> </g></svg></button></td>
      </tr>
    })
    }
   
      
    </tbody>
  </table>
</div>

        </div>
    )
}