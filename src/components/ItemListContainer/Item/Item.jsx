import './assets/item.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({id, title, price, stock, img}) => {
    return (
        <Card className="card-item">
            <Card.Title className="card-title">{title}</Card.Title>
            <Card.Img src={img} alt={title} className="game-img"></Card.Img>
            <Card.Text><span>Precio:</span> ${price}</Card.Text>
            <Card.Text><span>Stock disponible:</span> {stock}</Card.Text>
            <Card.Footer className="card-footer">
                <Link to={`/game/${id}`} className="option">Ver más</Link>
            </Card.Footer>
        </Card>
    );
}
export default Item;