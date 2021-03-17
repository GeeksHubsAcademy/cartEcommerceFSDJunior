
import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import './Header.css';

const Header = (props) => {

    //Variables
    let history = useHistory();

    //Hooks

    //Funciones

    const takeMeToNext = (destino) => {
        setTimeout(()=>{
            history.push(`/${destino}`);
        },500);
    }
    
    if(props.user?.token){
        return(
            <div className="header headerLogeado">
                <div className="name">{props.user?.name}</div>
                <div onClick={()=> takeMeToNext("products")} className="boton">PRODUCTOS</div>
                {/* Importaremos el componente CARRITO */}
            </div>
        )
    }else{
        return(
            <div className="header">
                <div onClick={()=> takeMeToNext("login")} className="boton">
                        LOGIN
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.userReducer.user
    }
}

export default connect(mapStateToProps)(Header);