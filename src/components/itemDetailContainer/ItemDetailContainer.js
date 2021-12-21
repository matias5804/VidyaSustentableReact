import React, { useState, useEffect } from 'react';
import {ItemDetail} from '../itemDetail/ItemDetail';
import MockedItem from '../mock/MockedItem';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  //console.log(itemId);


  
  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((resolve) => {
      //el timer funciona 
      setTimeout(() => {
        //nofunciona la constante myy data!
        const myData = MockedItem.find((item) => item.id === itemId);

        //me devuelve undefined
        console.log(myData);

        resolve(myData);
      }, 1000);
    });

    getItems
      .then((res) => {
        setProduct(res);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  return loading ? <h2>CARGANDO...</h2> : <ItemDetail {...product} />;
};