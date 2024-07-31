import { useState, useEffect } from "react"
import { useApiStatus } from "../../hooks/useApiStatus"
export function ModalRegisterCategories (){

const [category, setCategory]=useState({})
const {handleApiStatus}=useApiStatus()
const handleChange=(e)=>{
    setCategory({
        ...category,
        type:e.target.value
    })
}
const handleSubmit= async(e)=>{
    e.preventDefault()
// Suggested code may be subject to a license. Learn more: ~LicenseLog:323044947.
    try {
        handleApiStatus("enviando...")
        const response = await fetch(import.meta.env.VITE_API_CATEGORIES, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(category)
        })
        const data = await response.json();
        handleApiStatus("enviado")
    } catch (error) {
       handleApiStatus("error")
   
}
}



    return(
        <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn btn-error mx-3" onClick={()=>document.getElementById('my_modal_10').showModal()}>Registrar Categorias</button>
<dialog id="my_modal_10" className="modal">
<div className="modal-box">
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Solo necesitas escribir la categoria</span>
  </div>
  <div className="flex  justify-center">
  <input type="text" placeholder="Categoría aquí." onChange={handleChange} className="input input-bordered w-full max-w-xs mx-1" />
  <button className="btn btn-accent" onClick={handleSubmit}>Registrar</button>
  </div>
<a href="">{category.category}</a>
  <div className="label">
  </div>
</label>
</div>
<form method="dialog" className="modal-backdrop">
<button>close</button>
</form>
</dialog>
    </div>
    )
}