import './assets/item-list.css';
import Item from '../Item/Item';

const ItemList = ({juegos}) => {
    return (        
        <div className="item-list">
            {juegos.map(juego => <Item key={juego.id} {...juego} />)}
        </div>
    );
}
export default ItemList;