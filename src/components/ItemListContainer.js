import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ( {greeting} ) => {
    console.log("Soy un props de Item List Container" , greeting)
    return (
        <div>
            <h1> { greeting } </h1>
            <ItemCount stock={5} initial={1} />
        </div>
    )
}

export default ItemListContainer
