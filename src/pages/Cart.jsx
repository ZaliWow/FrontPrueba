import { useContext, useEffect } from "react"
import { CartContext } from "../context/cartContext"
import { CardBooks } from "../components/catalogComponents/CardBooks";
import { WhatsappButton } from "../components/cartComponents/WhatsappButton";


export function Cart(params) {

    const { cart, clearToCart, addToCart, isProductInCart, isCartVoid, deleteProductCart, TotalAccountCart, totalProductsCart } = useContext(CartContext)
    useEffect(() => {
        TotalAccountCart(cart)
        totalProductsCart()
    }, [cart]);

    return (
        <div className="w-full min-h-screen justify-center items-center flex flex-wrap   lg:p-20 p-10 pt-20 ">



            {
                isCartVoid(cart) ?
                    <div className="w-full h-fill justify-center flex flex-wrap   lg:p-20 p-10 pt-20 " >
                        <div className="fixed bottom-2 z-50 lg:bottom-16">
                            <WhatsappButton></WhatsappButton>
                        </div>
                        {
                            cart.map(product => (
                                <CardBooks Book={product}></CardBooks>
                            ))

                        }

                    </div>




                    : <h3 className="text-white text-3xl">Aún no tienes productos en tu carrito de compra </h3>


            }
        </div>
    )
}