import { useState } from "react"
import { storage, uploadFile } from "../../firebase/config";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContex";
import { useApiStatus } from "../../hooks/useApiStatus";

export function ModalRegisterBooks() {

    const [book, setBook] = useState({})
    const {auth} = useContext(AuthContext)
    const {handleApiStatus}=useApiStatus()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({
            ...book,
            [name]: value

        })
        

    }
    const handleArray = (e) => {
        const { name, value } = e.target;
        const array = value.split(',').map(item => item.trim());
        setBook({
            ...book,
            categories : array
        })
        console.log(array)
    }
    const handleSubmits = async (e) => {
     try {
        handleApiStatus("enviando...")
        e.preventDefault()
        const result = await fetch(import.meta.env.VITE_API_BOOKS, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book)})
            const data = await result.json()
            handleApiStatus("enviado")
        
     } catch (error) {
        handleApiStatus("error")
        
     }
    }
    const handleChangeFile = async  (e) => {
      const result = await  uploadFile(e.target.files[0])
      setBook({
        ...book,
        cover_image:result
      })
      console.log(result)
    }

    if(auth.token === null)return(
        <div className="w-screen h-screen flex justify-center items-center text-white  ">
            <h2 className="text-2xl ">no estas logueado por favor logueate.</h2>
        </div>
    )


    else return (
        <div>
            <div >
                <div className="w-screen h-fill flex flex-col text-white lg:p-24 p-2 pt-16">
                    <div className="label">
                        <span className="text-2xl font-bold">Ingresa todos los campos son requeridos</span>
                    </div>
                    <div className="flex items-center text-black">
                    <span className="text-xl mx-3">title</span>
                    <input onChange={handleChange} type="text" placeholder="title" name="title" className="mb-3 input input-bordered w-full " />
                    </div>
                    <div className="flex items-center text-black">
                    <span className="text-xl mx-3">descripcion</span>
                    <input onChange={handleChange}  type="text" placeholder="descripcion" name="description" className="mb-3 input input-bordered w-full " />

                    </div>
                    <div className="flex items-center text-black">
                    <span className="text-xl mx-3">publicado </span>
                    <input onChange={handleChange}  type="date" name="publication_date" className=" mb-3 input input-bordered w-full text-black " />

                    </div>
                    <div className="flex items-center text-black">
                    <span className="text-xl mx-3">ISBN  </span>
                    <input onChange={handleChange}  type="text" placeholder="ISBN" name="isbn" className="mb-3 input input-bordered w-full " />

                    </div>
                      <div className="flex items-center text-black">
                    <span className="text-xl mx-3">Autor </span>
                    <input onChange={handleChange}  type="text" placeholder="Pon solo el id" name="author_id" className="mb-3 input input-bordered w-full " />

                    </div>
                    <div className="flex items-center text-black">
                    <span className="text-xl mx-3">Precio </span>
                    <input onChange={handleChange}  type="number" placeholder="precio" name="price" className="mb-3 input input-bordered w-full" />

                    </div>
                    <div className="flex items-center text-black">
                    <span className="text-xl mx-3">Estado</span>
                    <select onChange={handleChange}  name="status" placeholder="precio" className="select select-bordered w-full text-black mb-3">
                        <option value="available">habilitado</option>
                        <option value="coming_soon">muy pronto</option>
                        <option value="out_of_stock">Agotado</option>
                    </select>
                    </div>
                    <div className="flex items-center v">
                    <span className="text-xl mx-3">Caratula</span>
                    <input type="file" onChange={handleChangeFile}className="file-input file-input-bordered w-full mb-3" />

                    </div>
                    <div className="flex items-center text-black">
                    <span className="text-xl mx-3">Categorias</span>
                    <input onChange={handleArray} type="text" placeholder="ejemplo: 1,2,3" name="categories" className=" input input-bordered w-full mb-3" />

                    </div>
                    <button className="btn btn-accent" onClick={handleSubmits}>Registrar</button>
                    
                </div>
             
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </div>
        </div>
    )
}