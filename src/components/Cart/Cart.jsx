
import React from 'react';
import {connect} from 'react-redux';

import './Cart.css';

const Cart = (props) => {

    
    let totalElementosCarrito = props.cart.length;

    return(
    
        <div className="elementoCarrito">
            <img className="imagenCarrito" src="img/carrito.png"/><div className="cantidadCarrito">{totalElementosCarrito}</div>
        </div>
    
    )
}

const mapStateToProps = (state) => {
    return {
        cart : state.cartReducer.cart
    }
}

export default connect(mapStateToProps)(Cart);