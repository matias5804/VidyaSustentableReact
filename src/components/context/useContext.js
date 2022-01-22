import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const UseCartContex = () => useContext(CartContext);

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const index = cart.findIndex((prod) => prod.item.id === item.id);
        
        if(index > -1) {
            const currentQuantity = cart[index].quantity;
            cart.splice(index, 1);
            setCart([...cart, { item, quantity: quantity + currentQuantity }]);
        } else {
            setCart([...cart, { item, quantity }]);
        };
    };

    //const addItem = (item, quantity) => { 
    //    setCart(cart.filter(item => item !== undefined ))
    //    if(isIncart(item.Id)){
    //        let index =  cart.findIndex((prod) => prod.item.Id === item.Id)
    //        let PosibleQuantity = cart[index].quantity + quantity;
    //        cart[index].quantity = PosibleQuantity
    //    }else{
    //       setCart([...cart,{item, quantity}]);
    //    }console.log(cart);
    //}

    

   // const removeItem = (id) => { 
   //     setCart(cart.filter(item => item.item.Id !== id ))
   //}



    const removeItem = (id) => {
        const deleteProduct = cart.filter((prod) => prod.item.id !== id);
        setCart([...deleteProduct]);
    };


    const getTotalPrice = () => cart.reduce( (price, {item, quantity}) => price+=quantity*item.price, 0);



    const itemSumatory = ()=>{
        let aux = 0;
        cart.map(item =>{
           aux = aux + item.quantity;
           return aux;
        })
    }

    const clear = () => { 
        setCart([]);
    }

    const isIncart = (id) => { 
        let bool = false;
        cart.map(product =>{
            if(product.item.Id === id) {
                bool = true;
            }
            return bool;
        });
    }

    const getItemQuantity = (id) => { 
        let quant = 0
        cart.map(product =>{
            if(product.item.Id === id) {
                quant = (product.quantity)
            }  
            return quant
        });
    }

    const cantidadTotal =() =>{
        let quantity =0;
        cart.forEach(({item}) => { quantity += parseInt(item.quantity)});
        return parseInt(quantity);
    }

    return (
        <CartContext.Provider value = {{addItem, removeItem, cart, getTotalPrice, itemSumatory, clear, getItemQuantity, isIncart, cantidadTotal}}>
            {children}
        </CartContext.Provider>
    )
};