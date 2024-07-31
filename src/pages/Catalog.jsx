import { CardBooks } from "../components/catalogComponents/CardBooks"
import { useState, useEffect, useContext } from "react"
import { CartContext } from "../context/cartContext";
import { useFilterBooks } from "../hooks/useFilterBooks";
import { FiltersInputs } from "../components/catalogComponents/FiltersInputs";
import { useApiStatus } from "../hooks/useApiStatus";

export function Catalog({setNewBook}) {
    const {handleApiStatus}= useApiStatus()
    const { filtersBody, setFiltersBody, FilterBooks } = useFilterBooks()
    const {cart, TotalAccountCart, totalProductsCart}= useContext(CartContext)
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        TotalAccountCart(cart)
        totalProductsCart()
    }, [cart]);

    useEffect(() => {
        handleApiStatus("enviando...")
        const fetchData = async () => {

            try {
                const response = await fetch(import.meta.env.VITE_API_BOOKS)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
               setBooks(result) 

                console.log(result)
            } catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false);
            }
        }

        fetchData()
      
    }, [])

    const filteredBooks= FilterBooks(books)

if(loading) return(<div className="w-full h-fill justify-center flex flex-wrap  lg:p-20 p-10 pt-20 ">loading...</div>)
  
    return (
        <div className="w-full h-fill justify-center flex flex-wrap  lg:p-20 p-10 pt-20 ">
        
          
          
           
           <FiltersInputs></FiltersInputs>
            {
                filteredBooks.map(book => {
                    return <CardBooks Book={book} setNewBook={setNewBook}></CardBooks>
                })
            }
 
        </div>
    )
}