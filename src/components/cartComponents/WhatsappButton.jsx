import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/cartContext";



export function WhatsappButton(params) {
    const [message, setMessage] = useState('holaaa');
    const {cart, totalAccountState}= useContext(CartContext)


    useEffect(() => {
        // Extraer todos los títulos y concatenarlos
        const titlesAndQuantities = cart.map(item => `${item.title} (${item.quantity})`).join(', ');
        const fullMessage = `Hola, quisiera comprar estos libros en estas cantidades: ${titlesAndQuantities} donde indican que tienen un valor de ${totalAccountState}.`;
        setMessage(fullMessage);
    }, [cart]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const phoneNumber = '+573164511496'; // Cambia esto al número de teléfono deseado
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank'); // Abre el enlace en una nueva pestaña
    };
    return(
<button className="btn  btn-accent w-screen lg:w-96" onClick={handleSubmit}>Terminar la compra</button>
    )
}