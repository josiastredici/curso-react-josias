import 'bootstrap/dist/css/bootstrap.min.css';

const CartItem = ({id, title, price, quantity}) => {
    return (
        <tr id='{id}'>
            <td>{title}</td>
            <td>{price} ARS</td>
            <td>{quantity}</td>
            <td>{price * quantity} ARS</td>
            <td><button onClick={() => removeItem(id)}>Quitar</button></td>
        </tr>
    );
}
export default CartItem;