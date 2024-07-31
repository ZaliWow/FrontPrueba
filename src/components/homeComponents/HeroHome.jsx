import { ModalAccount } from "../modalComponents/ModalAccount"
import { useNavigate } from "react-router-dom"


export function HeroHome(params) {
    
    const navigate = useNavigate()
    return (
        <div className="hero bg-Hero bg-cover bg-center min-h-screen">
            <div className="hero bg-black/60 min-h-screen">
                <div className="hero-content text-center ">
                    <div className="max-w-screen lg:px-10 px-2  mt-16 lg:mt-0">
                        <h1 className="text-5xl font-bold text-white w-full ">Historias y Encantos</h1>
                        <p className="text-3xl text-white font-semibold py-3">
                            ¡Descubre Tu Próxima Aventura Literaria!
                        </p>
                        <p className="py-6 text-2xl text-white">

                            Bienvenido a Historias y Encantos, tu destino online para encontrar los libros que inspirarán, emocionarán y te llevarán a mundos nuevos. Desde clásicos atemporales hasta los bestsellers más recientes, nuestra colección ha sido cuidadosamente seleccionada para satisfacer a todos los amantes de la lectura.

                            Explora, disfruta y deja que cada página te transporte a una nueva historia.
                        </p>
                        <div className="flex justify-center flex-wrap">
                        <button className="btn btn-outline text-white text-2xl m-2" onClick={() => navigate('/catalogo')}>Ver Libros</button>
                        <ModalAccount></ModalAccount>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}