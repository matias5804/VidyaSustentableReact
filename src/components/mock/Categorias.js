import React from 'react';
import { NavLink } from 'react-router-dom';


export const Categories = () => {
    const categories = [
      { id: '1Total', address: '/', text: 'Todos' },
      { id: '2daCat', address: '/category/Personal', text: 'Cuidado Personal' },
      { id: '3eraCat', address: '/category/Hogar', text: 'Cuidado del Hogar' },
    ];
  
    return (
      <section className='navSelecProducts'>
        {categories.map((cat) => {
          return (
            <div className="linksProducts" key={cat.id}>

              <NavLink to={cat.address} className={({ isActive }) => (isActive ? 'activeClass' : '')}              >
                {cat.text} 
              </NavLink>
              
            </div>
          );
        })}
      </section>
    );
  };