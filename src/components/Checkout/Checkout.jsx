import { CartContext } from "../../context/CartContext";
import { query, collection, getDocs, where, addDoc, writeBatch, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { useState, useContext } from "react";
import CheckoutForm from '../forms/CheckoutForm/CheckoutForm';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, mail }) => {
        setLoading(true);
        try {
            const objOrder = {
                buyer: {
                    name, phone, mail
                },
                items: cart,
                total: total,
                date: serverTimestamp()
            }
            
            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);

            const productsRef = collection(db, 'items');
            const productsAddedFromFirestore = await getDocs(query(productsRef, where('id', 'in', ids)))
            const { docs } = productsAddedFromFirestore;

            docs.forEach( doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.error('Hay productos que no tienen stock suficiente', outOfStock);
            }
        }
        catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    if (loading)
    {
        return <h1>Procesando pedido...</h1>;
    }

    if (orderId)
    {
        return <h1>Tu ID de pedido es: {orderId}</h1>;
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
}
export default Checkout;