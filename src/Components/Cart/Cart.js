import React from 'react';

const Cart = (props) => {
    const data = props.datapassed;

    const toatals = data.reduce((toatal, item) => toatal + item.Coursefree , 0);
    
    
    return (
        <div>
           {
               data.map(dt => (
                   <div>
                       <h3>name: {dt.CourseName}</h3>
                       <h3>price: {dt.Coursefree}</h3>
                   </div>
               ))
           }

            <h1>Toatal:{toatals} </h1>
        </div>
    );
};

export default Cart;