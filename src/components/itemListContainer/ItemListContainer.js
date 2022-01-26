import React, { useState, useEffect } from 'react';
import { ItemList } from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/Firebase';
import Loader from '../animation/Spinner';
import '../styles/styles.css';

export const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { catId } = useParams();

    useEffect(() => {

      setLoading (true);
      const bd = getFirestore();
      const itemCollection = bd.collection('items');

      itemCollection.get().then((value) => {

        let datos= value.docs.map((e) => { 
        return {...e.data(), id: e.id}
        });

        const getItems = new Promise ((resolve) => {

          setTimeout(() => {

            const myData = catId 
            ?
            datos.filter((item) => item.category === catId)
            :
            datos;
            
            resolve(myData);

          }, 2000); 

        })

        getItems.then((res) => {
          setItems(res)
        }).finally(() => setLoading(false));
      
      });

    },[catId]) ;

  return loading ? (
    <div className='divLoader'>
      <Loader />
    </div>) 
    : (<div>
        <ItemList items={items} />
      </div>)
};
