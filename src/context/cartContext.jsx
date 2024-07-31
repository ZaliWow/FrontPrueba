import { createContext, useState } from "react";

// crear contexto
export const CartContext = createContext()
// proveer contexto

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [totalAccountState, setTotalAccountState]=useState(0)
    const [totalProducts, setTotalProducts]=useState(0)


    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
         
        }
            setCart(prevState => ([
                ...prevState,
                {
                    ...product,
                    quantity:1
                }
            ]))  
         t
   
    }


    
    const totalProductsCart = () => {
        setTotalProducts(cart.length)
    }
    const clearToCart = () => {
        setCart([])
        setTotalAccountState(0)
    }
    const isProductInCart = product =>{
       return cart.some(item => item.id ===product.id)
      }
    const isCartVoid = cart =>{
        const sizeCart = cart.length
        if(sizeCart > 0  ){
            return true
        }
        return false
    }
    const deleteProductCart = product =>{
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart.splice(productInCartIndex, 1)
            return setCart(newCart)
        }
        TotalAccountCart(product)

    }
    const TotalAccountCart = cart =>{
        let temporalAccount = 0;
        for (let i = 0; cart.length >i; i++ ){
            let temporalProduct = cart[i].price * cart[i].quantity
            temporalAccount += temporalProduct
        }
       return setTotalAccountState(parseFloat(temporalAccount.toFixed(2)))
      
    }


    return (
        <CartContext.Provider value={
            {
                cart,
                clearToCart,
                addToCart,
                isProductInCart,
                isCartVoid,
                deleteProductCart,
                totalAccountState,
                TotalAccountCart,
                totalProductsCart,
                totalProducts
            }
        }>
            {children}
        </CartContext.Provider>
    )
}