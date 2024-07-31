import { useNavigate } from "react-router-dom"
export function ModalAccount(params) {
  const navigate = useNavigate()
    return(
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-outline  btn-secondary text-2xl m-2" onClick={()=>document.getElementById('my_modal_3').showModal()}>Tengo una cuenta</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Esta funcionalidad es exclusiva de administradores, pero puedes acceder a todos nuestros libros Aqui <button className="btn btn-secondary" onClick={() => navigate('/catalogo')}>Ver libros</button></p>
    <button className="btn-outline btn-secondary" onClick={() => navigate('/login-administrativo')}>Soy administrador</button>
  </div>
</dialog>
        </div>
    )
}