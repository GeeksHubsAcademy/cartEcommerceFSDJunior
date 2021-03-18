
import React, {useEffect,useState} from 'react';

import {connect} from 'react-redux';
import { TOTAL_CART, CLEAN } from '../../redux/types/cartType';

import './Buy.css';

const Buy = (props) => {

    useEffect(()=>{
        calculaTotal();
    },[]);

    useEffect(()=> {
        calculaTotal();
    });

    const calculaTotal = () => {
        /*Calculamos el precio total durante el montaje inicial
        del componente*/

        //Mapeamos para calcular el precio total

        let precioTotal = 0;

        props.cart.map(x=> {
            return precioTotal += (x.precio * x.enCarrito);
        })

        //Una vez hemos calculado el precio total, lo guardamos en RDX 
        //para su fácil acceso

        props.dispatch({type: TOTAL_CART, payload: precioTotal });
    }

    const emptyCart = () => {
        //vaciamos el carrito con un dispatch que igual a 0 el contenido

        props.dispatch({type: CLEAN, payload: [] });
        
        
    }

    return(

        <div className="vistaBuy">
            <div className="productsInChart">
                {props.cart.map(y => {
                    return (
                        <div className="productFinalBuy" key={y.nombre+ "asd"}>
                            <div >{y.name}</div>
                            <div ><img className="imgProduct" src={y.imagen}/></div>
                            <div >{y.precio}</div>
                        </div>
                    )
                })}
            </div>
            <div className="totalPrice">
                El precio total es {props.totalCart}
            </div>
            <button onClick={()=> emptyCart()}>VACIAR CARRITO</button>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        cart : state.cartReducer.cart,
        totalCart : state.cartReducer.totalCart
    }
}

export default connect(mapStateToProps)(Buy);