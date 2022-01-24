import React, { useState, useEffect } from 'react';
import { ItemList } from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/Firebase';

export const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const { catId } = useParams();

    useEffect(() => {

      const bd = getFirestore();
      const itemCollection = bd.collection('items');

      itemCollection.get().then((value) => {
        let datos= value.docs.map((e) => { 
        return {...e.data(), id: e.id}
        });

        const getItems = new Promise ((resolve) => {

          const myData = catId 
          ?
          datos.filter((item) => item.category === catId)
          :
          datos;

          resolve(myData);

        })

        getItems.then((res) => {
          setItems(res)
        })

      },[catId])

    } );

  return <ItemList items={items} />

};
