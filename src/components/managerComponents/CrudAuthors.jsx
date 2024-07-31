import { useState, useEffect } from "react"
import { UpdateBooks } from "./UpdateBooks"
import { useApiStatus } from "../../hooks/useApiStatus"

export function CrudAuthors(){
    const [authors, setAuthors]= useState([])
    const {handleApiStatus}=useApiStatus()
    const [newAuthor, setNewAuthor]=useState({

    })
    const handleChange = (e) => {
      const { name, value } = e.target;
      
        setNewAuthor({
            ...newAuthor,
            [name]: value
        })
    }

    const handleDelete = async (e, id) => {
      e.preventDefault()
  
        try {
          handleApiStatus("enviando...")
          const response = await fetch(`${import.meta.env.VITE_API_AUTHORS}/${id}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(authors)
          })
          const data = await response.json();
          handleApiStatus("enviado")
        } catch (error) {
          handleApiStatus("error")
        }
    
      }
    const handleUpdate = async (e, id) => {
    try {
      handleApiStatus("enviando...")
      const response = await fetch(`${import.meta.env.VITE_API_AUTHORS}/${id}`, {
          method: 'PUT',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(newAuthor)
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
                const response = await fetch(import.meta.env.VITE_API_AUTHORS)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
               setAuthors(result) 
    
                console.log(result)
            } catch (error) {
                console.log(error)
            }
            finally {
               
            }
           }
           fetchData()
        },[])

    return(
        <div className="w-full h-fill pb-16 flex justify-center items-center text-white">

        <div className="overflow-x-auto text-white">
          <table className="table text-white">
            {/* head */}
            <thead>
              <tr>
                <th className="text-white text-2xl">id</th>
                <th className="text-white text-2xl">Tipo</th>
                <th className="text-white text-2xl">Nacionalidad</th>
                <th className="text-white text-2xl">Editar</th>
                <th className="text-white text-2xl">Borrar</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
            {
            
            authors.map((author)=>{
                return <tr>
                <th className="text-xl">{author.id}</th>
                <td className="text-xl text-black"><input onChange={(e)=>handleChange(e)} name="name" type="text" placeholder={author.name} className="input input-bordered w-full max-w-xs" /></td>
                <td className="text-xl text-black"><input onChange={(e)=>handleChange(e)} name="nationality" type="text" placeholder={author.nationality} className="input input-bordered w-full max-w-xs" /></td>
                <td> <button className="btn btn-accent " onClick={(e)=>handleUpdate(e,author.id)}><svg className="h-5 w-5" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>edit [#1479]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-99.000000, -400.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M61.9,258.010643 L45.1,258.010643 L45.1,242.095788 L53.5,242.095788 L53.5,240.106431 L43,240.106431 L43,260 L64,260 L64,250.053215 L61.9,250.053215 L61.9,258.010643 Z M49.3,249.949769 L59.63095,240 L64,244.114985 L53.3341,254.031929 L49.3,254.031929 L49.3,249.949769 Z" id="edit-[#1479]"> </path> </g> </g> </g> </g></svg></button></td>
                <td><button 
                onClick={(e)=>handleDelete(e,author.id)}
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