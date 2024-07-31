import { useEffect, useState, useContext } from "react"
import { AuthContext } from "../context/AuthContex";
import { useNavigate } from "react-router-dom";
import { off } from "firebase/database";


export function LoginAdministrativo(params) {
    const {login, auth} = useContext(AuthContext)
   

    const [credentials, setCredentials] = useState({email: '', password: ''})
    const navigate = useNavigate()
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
      };
    
    const handleLogin = (event) => {
        event.preventDefault()
        login(credentials)
       
        
    }
    


    return(
        <div className="w-full h-screen flex justify-center items-center bg-black">
        <div className="modal-box shadow-custom-light">
        <h3 className=" text-center text-3xl font-bold text-black">Bienvenido Administrador</h3>
        <div className="flex w-full justify-center mt-10">
            <div className="  avatar">
                <div className="w-24 rounded-full">
                    <img src="https://images.unsplash.com/photo-1585055462747-0bbcbd0e2167?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25lJTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D"  />
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center my-10 px-10 ">
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:1800581898. */}
<input 
                        type="text" 
                        placeholder="Email" 
                        name="email"
                        onChange={handleChange}
                        className="input border-b-4 w-full border-x-0 border-t-0 border-gray-500 mt-10" />

                        <input 
                        type="text"
                        placeholder="Password" 
                        name="password"
                        onChange={handleChange}
                        className="input border-b-4 w-full border-x-0 border-t-0 border-gray-500  mt-10" />
                        <button 
                        className="btn btn-primary mt-10 w-full mx-10"
                        onClick={handleLogin}
                        >Login</button>
                    


        </div>

    </div>
    </div>
    )
}