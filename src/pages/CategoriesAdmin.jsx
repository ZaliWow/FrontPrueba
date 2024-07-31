import { useContext } from "react"
import { AuthContext } from "../context/AuthContex"
import { CrudCategories } from "../components/managerComponents/CrudCategories"
import { ModalRegisterCategories } from "../components/modalComponents/ModalRegisterCategories"

export function CategoriesAdmin(){
    const {auth}=useContext(AuthContext)
    
    if(auth.token ===null)return(
        <div className="w-full h-screen flex justify-center items-center ">
            <h1 className="text-2xl">No tienes permisos de administrador, por favor autenticate.</h1>
        </div>
    )
return(
    <div className="w-full min-h-screen justify-center items-center flex flex-wrap   lg:p-20 p-10 pt-20 ">
    <CrudCategories></CrudCategories>
    <div className="fixed bottom-2 z-50 lg:bottom-16">
        
<ModalRegisterCategories></ModalRegisterCategories>      
       
           
    </div>
    
</div>
)
}