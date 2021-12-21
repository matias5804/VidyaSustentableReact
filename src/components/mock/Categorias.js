import React from 'react';
import { NavLink } from 'react-router-dom';


export const Categories = () => {
    const categories = [
      { id: '1Total', address: '/', text: 'Todos los Productos' },
      { id: '2daCat', address: '/category/Personal', text: 'Cuidado Personal' },
      { id: '3eraCat', address: '/category/Hogar', text: 'Cuidado del Hogar' },
    ];
  
    return (
      <section style={{ background: 'lightgray' }}>
        {categories.map((cat) => {
          return (
            <div className="links" key={cat.id}>
              <NavLink
                to={cat.address}
                className={({ isActive }) => (isActive ? 'activeClass' : '')}
              >
                {cat.text}
              </NavLink>
            </div>
          );
        })}
      </section>
    );
  };