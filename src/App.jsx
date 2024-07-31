import { Home } from "./pages/Home"
import { Navbar } from "./components/globalComponents/Navbar"
import { Route, Routes } from "react-router-dom"
import { LoginAdministrativo } from "./pages/LoginAdministrativo"
import { Catalog } from "./pages/Catalog"
import { Cart } from "./pages/Cart"
import { BooksAdmin } from "./pages/BooksAdmin"
import {AuthorsAdmin} from "./pages/AuthorsAdmin"
import {CategoriesAdmin} from "./pages/CategoriesAdmin"
import { ModalRegisterBooks } from "./components/modalComponents/ModalRegisterBooks"
import { UpdateBooks } from "./components/managerComponents/UpdateBooks"
import { useState } from "react"
import { ApiStatus } from "./components/globalComponents/ApiStatus"

function App() {

  const [newBook, setNewBook]=useState({})
  return (
    <>
    <Navbar></Navbar>
     <ApiStatus></ApiStatus>
<Routes>
<Route path="/" element={<Home></Home>}/>
<Route path="/login-administrativo" element={<LoginAdministrativo></LoginAdministrativo>}></Route>
<Route path="/catalogo" element={<Catalog  setNewBook={setNewBook}></Catalog>}></Route>
<Route path="/carrito" element={<Cart></Cart>}></Route>
<Route path="/administracion-libros" element={<BooksAdmin></BooksAdmin>}></Route>
<Route path="/administracion-autores" element={<AuthorsAdmin></AuthorsAdmin>}></Route>
<Route path="/administracion-categorias" element={<CategoriesAdmin></CategoriesAdmin>}></Route>
<Route path="/administracion-books" element={<ModalRegisterBooks></ModalRegisterBooks>}></Route>
<Route path="/editar/libro" element={<UpdateBooks book={newBook} setBook={setNewBook}></UpdateBooks>}></Route>
</Routes>
    </>
  )
}

export default App
