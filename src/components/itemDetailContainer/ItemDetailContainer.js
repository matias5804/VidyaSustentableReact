import React, { useState, useEffect } from 'react';
import {ItemDetail} from '../itemDetail/ItemDetail';
import  MockedItem  from '../mock/MockedItem';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  //selecciona los productos por categoria
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  //console.log(itemId);

  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((resolve) => {
      //el timer funciona  
      setTimeout(() => {

       
        const myData = itemId && MockedItem.find((item) => item.id === itemId)
        
       
        //console.log(myData);

        resolve(myData);
      }, 1000);
    });

    getItems
      .then((res) => {
        setItem(res);
      })
      .finally(() => setLoading(false));
  
  }, [itemId]);

  return loading ? <h2>CARGANDO...</h2> : <ItemDetail item={item} />;
};