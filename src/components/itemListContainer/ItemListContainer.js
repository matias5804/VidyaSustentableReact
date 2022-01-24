import React, { useState, useEffect } from 'react';
import { ItemList } from '../itemList/ItemList';
import MockedItem from '../mock/MockedItem';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const myData = catId
          ? MockedItem.filter((item) => item.category === catId)
          : MockedItem;

        resolve(myData);
      }, 1000);
    });

    getItems
      .then((res) => {
        setItems(res);
      })
      .finally(() => setLoading(false));
  }, [catId]);

  return loading ? (
    <h2>CARGANDO...</h2>
  ) : (<ItemList items={items} />);
};
