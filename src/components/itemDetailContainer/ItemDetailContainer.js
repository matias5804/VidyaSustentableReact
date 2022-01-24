import React, { useState, useEffect } from 'react';
import {ItemDetail} from '../itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/Firebase';

export const ItemDetailContainer = () => {
  
  const [items, setItems] = useState({});
  const { itemId } = useParams();

  useEffect(() => {

    const bd = getFirestore();
    const itemCollection = bd.collection('items');

    itemCollection.get().then((value) => {

      let datos= value.docs.map((e) => { 
       return {...e.data(), id: e.id}
      });

      const getItems = new Promise((resolve) => {
        const items = itemId && datos.find((item) => item.id === itemId)
        resolve(items);
      })

      getItems.then((res) => {
        setItems(res);
      })

    });

  },[itemId]) ;

  return <ItemDetail item={items} />
};