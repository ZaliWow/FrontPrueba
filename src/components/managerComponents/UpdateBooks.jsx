import { useState } from "react"
import { storage, uploadFile } from "../../firebase/config";
import { useApiStatus } from "../../hooks/useApiStatus";

export function UpdateBooks({book, setBook}){

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
  
    const handleUpdate = async (e) => {
  try {
    e.preventDefault()
    handleApiStatus("enviando...")
    const response = await fetch(`${import.meta.env.VITE_API_BOOKS}/${book.id}`,{
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify(book)
    })
    const data = await response.json();
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

    return(
        <div >
        <div >
            <div className="w-screen h-fill flex flex-col text-black lg:p-24 p-2 pt-16 ">
                <div className="label">
                    <span className="text-2xl font-bold text-white">Edite solo los campos que desea modificar</span>
                </div>
                <div className="flex items-center">
                <span className="text-xl mx-3 text-white">title</span>
                <input onChange={handleChange} type="text" placeholder={book.title} name="title" className="mb-3 input input-bordered w-full " />
                </div>
                <div className="flex items-center">
                <span className="text-xl mx-3 text-white">descripcion</span>
                <input onChange={handleChange}  type="text" placeholder={book.description} name="description" className="mb-3 input input-bordered w-full " />

                </div>
                <div className="flex items-center">
                <span className="text-xl mx-3 text-white">publicado </span>
                <input onChange={handleChange}  type="date" name={book.publication_date} className=" mb-3 input input-bordered w-full text-black " />

                </div>
                <div className="flex items-center">
                <span className="text-xl mx-3 text-white">ISBN  </span>
                <input onChange={handleChange}  type="text" placeholder={book.isbn} name="isbn" className="mb-3 input input-bordered w-full " />

                </div>
                  <div className="flex items-center">
                <span className="text-xl mx-3 text-white">Autor </span>
                <input onChange={handleChange}  type="text" placeholder={book.author_id} name="author_id" className="mb-3 input input-bordered w-full " />

                </div>
                <div className="flex items-center">
                <span className="text-xl mx-3 text-white">Precio </span>
                <input onChange={handleChange}  type="number" placeholder={book.price} name="price" className="mb-3 input input-bordered w-full" />

                </div>
                <div className="flex items-center">
                <span className="text-xl mx-3 text-white">Estado</span>
                <select onChange={handleChange}  name="status"  className="select select-bordered w-full text-black mb-3">
                    <option value="available">habilitado</option>
                    <option value="coming_soon">muy pronto</option>
                    <option value="out_of_stock">Agotado</option>
                </select>
                </div>
                <div className="flex items-center text-white">
                <span className="text-xl mx-3">Caratula</span>
                <input type="file" onChange={handleChangeFile}className="file-input file-input-bordered w-full mb-3" />

                </div>
                <div className="flex items-center text-white">
                <span className="text-xl mx-3">Categorias</span>
                <input onChange={handleArray} type="text" placeholder="Ejemplo 1,2,3"  name="categories" className=" input input-bordered w-full mb-3" />

                </div>
                <button className="btn btn-accent" onClick={handleUpdate}>Registrar</button>
                
            </div>
         
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </div>
    </div>
    )
}