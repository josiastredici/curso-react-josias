import './assets/item-detail-container.css'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [juego, setJuego] = useState(null);
    const { juegoId } = useParams();

    useEffect(() => {
        getJuegoById(juegoId)
            .then(response => {
                setJuego(response);
            })
            .catch(error => {
                console.error(error);
            })
        }, [juegoId]);
    
    return (
        <div className="item-detail-container">
            <ItemDetail {...juego}/>
        </div>
    );
}
export default ItemDetailContainer;