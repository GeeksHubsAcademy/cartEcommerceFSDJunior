
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {ADD} from '../../redux/types/cartType';
import './Products.css';

const Products = (props) => {

    //HOOKS
    const [msgError, setMsgError] = useState(''); 

    const addCart = (prod) => {

        let datosProducto = {}

        if(prod === "secador"){
            datosProducto = {
                nombre : "secador",
                precio : 10,
                imagen : "img/secador.jpg",
                enCarrito : 0
            }
        }else{
            datosProducto = {
                nombre : "marshall",
                precio : 2500,
                imagen : "img/marshall.jcm.jpg",
                enCarrito : 0
            }
        }

        //comprobamos que el producto no esté en el carrito
        for(let item of props.cart){
            if(datosProducto.nombre === item.nombre){
                setMsgError('Este producto ya ha sido añadido anteriormente');
                return; 
            }
        }

        //sumamos un producto más al carrito 
        datosProducto.enCarrito = datosProducto.enCarrito + 1;

        //guardariamos el producto en RDX
        props.dispatch({type: ADD, payload: datosProducto});
    }

    return(
        <div className="vistaGeneralProducts">
            <div className="vistaProducts">
                <div className="cardProduct">
                    <div className="productName">SECADOR HAIRSTYLE 2000</div>
                    <div className="productPic"><img onClick={()=> addCart("secador")} className="imgProduct" src="img/secador.jpg"/></div>
                    <div className="productDesc">Secador barato de pelo</div>
                    <div className="productDesc">10€</div>

                </div>
                <div className="cardProduct">
                    <div className="productName">MARSHALL JCM 800 2203</div>
                    <div className="productPic"><img onClick={()=> addCart("marshall")} className="imgProduct" src="img/marshall.jcm.jpg"/></div>
                    <div className="productDesc">Amplificador de guitarra</div>
                    <div className="productDesc">2500€</div>
                </div>
            </div>
            <div>{msgError}</div>
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        cart : state.cartReducer.cart
    }
}

export default connect(mapStateToProps)(Products);