import React, { useState, useEffect } from 'react';
import {ItemDetail} from '../itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/Firebase';
import Loader from '../animation/Spinner';

export const ItemDetailContainer = () => {
  
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {

    setLoading(true);
    const bd = getFirestore();
    const itemCollection = bd.collection('items');

    itemCollection.get().then((value) => {

      let datos= value.docs.map((e) => { 
       return {...e.data(), id: e.id}
      });

      const getItems = new Promise((resolve) => {
        setTimeout(() => {

          const items = itemId && datos.find((item) => item.id === itemId)
          resolve(items);
        },2000);

      })

      getItems.then((res) => {
        setItems(res);
      }).finally(()=> setLoading(false));

    });

  },[itemId]) ;

  return loading ? (
    <div className='loader'>
      <Loader/>
    </div>)
    : (<div>
        <ItemDetail item={items} />
      </div>)
};