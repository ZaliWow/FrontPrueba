import { useApiStatus } from "../../hooks/useApiStatus";
import { useEffect } from "react"

export function ApiStatus(params) {
  const { handleApiStatus, status } = useApiStatus();

  const closeAlert = () => {
    handleApiStatus(null)
  }
  // sin enviar
  if (status === null) return (
    <div></div>
  )
  // enviando
  else if (status === 'Enviando...') return (
    <div role="alert" className="fixed top-20 alert  lg:w-72 lg:p-8  z-20  right-10 ">
      <span className="loading loading-spinner text-primary"></span>
      <span>Loading...</span>

    </div>
  )
  // enviado satisfactoriamente
  else if (status === 'enviado') return (
    <div role="alert" className=" w-1/2 fixed top-20 alert  lg:w-72 lg:p-8  z-20  right-10 bg-green-300 ">

    
      <p onClick={closeAlert}>X</p>
      <span>Informacion enviada.</span>
    
    </div>
  )
  //errores
  else if (status === "error ")return (
    <div role="alert" className="w-1/2 fixed top-20 alert  lg:w-72 lg:p-8  z-20  right-10 bg-red-300 ">

     <p>X</p>
      <span>Algo ha salido mal.</span>
    
    </div>
  )


}