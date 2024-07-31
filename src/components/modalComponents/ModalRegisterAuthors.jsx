import { useState } from "react"
import { useApiStatus } from "../../hooks/useApiStatus";
export function ModalRegisterAuthors (){
  const [author, setAuthor]= useState({})
  const {handleApiStatus}=useApiStatus()
  
  const handleChange=(e)=>{
    const { name, value } = e.target;
    setAuthor({
      ...author,
      [name]:value

    })
  }
  const handleSubmit = async (e) => {
   try {
    handleApiStatus("enviando...")
    const response = await fetch(import.meta.env.VITE_API_AUTHORS,{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(author)
    })
    const data = await response.json();
handleApiStatus("enviado")
   } catch (error) {
    handleApiStatus("error")
   }
  }



    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-error mx-3" onClick={()=>document.getElementById('my_modal_7').showModal()}>Registrar Autores</button>
<dialog id="my_modal_7" className="modal">
  <div className="modal-box flex flex-col">
  <div className="label">
    <span className="label-text">Debes conocer el Nombre y Nacionalidad del autor</span>
  </div>
  <input onChange={handleChange} type="text" placeholder="Nombre" name="name" className="input input-bordered w-full  mb-3" />
  <input onChange={handleChange} type="text" placeholder="Nacionalidad" name="nationality" className="input input-bordered w-full  mb-3" />
  <button className="btn btn-accent" onClick={handleSubmit}>Registrar</button>
 
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
        </div>
    )
}