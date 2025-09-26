import './assets/item-detail-container.css'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from 'firebase/firestore';
import {db} from '../../../firebase/firebase';

const ItemDetailContainer = () => {

    const [juego, setJuego] = useState(null);
    const [loading, setLoading] = useState(true);
    const { juegoId } = useParams();

    useEffect(() => {
        setLoading(true);
        const docRef = doc(db, 'items', juegoId);
        getDoc(docRef)
            .then(response => {
                const data = response.data();
                const productAdapted = { id: response.id, ...data };
                setJuego(productAdapted);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
        }, [juegoId]);
    

    if (loading) {
        return <h1 className='loading'>Loading...</h1>
    }
    return (
        <div className="item-detail-container">
            <ItemDetail {...juego}/>
        </div>
    );
}
export default ItemDetailContainer;