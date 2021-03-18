
import React, {useEffect,useState} from 'react';

import {connect} from 'react-redux';
import { TOTAL_CART, CLEAN, EDIT } from '../../redux/types/cartType';

import './Buy.css';

const Buy = (props) => {

    //UseEffect con array vacio homónimo al componenteDidMount()

    useEffect(()=>{
        calculaTotal();
    },[]);

    //UseEffect con array vacio homónimo al componenteDidUpdate()

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
    };

    const emptyCart = () => {
        //vaciamos el carrito con un dispatch que igual a 0 el contenido

        props.dispatch({type: CLEAN, payload: [] });
        
        
    };

    const variarCantidad = (operacion,producto) => {
        if(operacion === "mas"){

            //Incremento la cantidad y guardo en RDX
		

            props.dispatch({type: EDIT, 
            
                payload: {
				nombre: producto.nombre,
				nuevaCantidad: producto.enCarrito + 1
                }
			})

        }else{

            //Decremento la cantidad y guardo en RDX

            props.dispatch({type: EDIT, 
            
                payload: {
				nombre: producto.nombre,
				nuevaCantidad: producto.enCarrito - 1
                }
			})

        };
    };

    return(

        <div className="vistaBuy">
            <div className="productsInChart">
                {props.cart.map(y => {
                    return (
                        <div className="productFinalBuy" key={y.nombre+ "asd"}>
                            <div >{y.name}</div>
                            <div ><img className="imgProduct" src={y.imagen}/></div>
                            <div >{y.precio}</div>
                            <div className="botonesCarrito">
                                <div onClick={()=> variarCantidad("mas",y)} className="botonCarrito">+</div>
                                <div onClick={()=> variarCantidad("menos",y)} className="botonCarrito">-</div>
                            </div>
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