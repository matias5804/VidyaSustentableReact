import React from 'react';
import Item from '../item/Item';
import '../styles/styles.css';

export const ItemList = ({ items }) => {
  return (
    <section className="tienda">
      {items?.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </section>
  );
};
