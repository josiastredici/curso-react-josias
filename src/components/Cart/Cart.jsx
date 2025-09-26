import './assets/Cart.css';
import { useContext } from "react";
import CartItem from '../CartItem/CartItem';
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

export default function Cart() {
    const { cart, gamesQuantity, total, clearCart } = useContext(CartContext);

    if (gamesQuantity() === 0) {
        return (
            <div className='cart-container'>
                <h1>El carrito está vacío</h1>
                <Link to="/" className="option btn-return">Volver</Link>
            </div>
        )
    }

    return (
        <div className='cart-container'>
            <Table striped bordered hover>
                <thead>
                    <th>Título</th>
                    <th>Precio unitario</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Quitar</th>
                </thead>
                <tbody>
                    { cart.map(game => <CartItem key={game.id} {...game}/>) }
                </tbody>   
            </Table>
            <h3>Total: ${total()}</h3>
            <button onClick={() => clearCart()} className="button btn-clear">Limpiar carrito</button>
            <div>
                <Link to="/checkout" className="option btn-checkout">Pagar</Link>
            </div>
        </div>
    )
}