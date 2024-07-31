import { useContext } from "react"
import { FiltersContext } from "../../context/FilterBooksContext"
import { useFilterBooks } from "../../hooks/useFilterBooks"
import { AuthContext } from "../../context/AuthContex"
import { ModalRegisterBooks } from "../modalComponents/ModalRegisterBooks"
import { Navigate, useNavigate } from "react-router-dom"
export function FiltersInputs() {


    const { filtersBody, setFiltersBody } = useFilterBooks()
    const {auth} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleChangeText = (e) => {
        setFiltersBody(prevState => ({
            ...prevState,
            author:e.target.value,
        }))
        console.log(filtersBody.author)
    }
    const handleChangeSelect=(e)=>{
        setFiltersBody(prevState => ({
            ...prevState,
            category:e.target.value,
        }))
        console.log(filtersBody.category)
    }

    return (
        <div className="fixed bottom-10 lg:bottom-16 flex z-50 ">
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" name="author" onChange={handleChangeText} className="grow" placeholder="Filtrar Autores" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </label>
            <select name="category" onClick={handleChangeSelect} className="select select-secondary w-full max-w-xs">
                <option disabled selected value="">Categorias</option>
                <option value="all">Todas</option>
                <option value="comedia">Comedia</option>
                <option value="romance">Romance</option>
                <option value="fantasia"> Fantasia</option>
                <option value="terror">Terror</option>
                <option value="accion">Accion</option>

            </select>
            {
                auth.token === null ? null : <div className="  ">
            
            <button className="btn btn-secondary mx-3" onClick={() => navigate("/administracion-books")}>Registrar Libros</button>
         
             
      </div>
            }
        </div>
    )
}