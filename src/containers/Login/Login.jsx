
import React from 'react';
import {LOGIN} from '../../redux/types/userType';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

import './Login.css';

const Login = (props) => {

    //Variables 

    let history = useHistory();

    //Funciones

    const makeLogin = () => {
        //Proceso axios con backend

        let datosFakeLogin = {
            id: '123',
            token : 'alskdfmñoierjqprjoseijfaoer34341',
            name : 'Jose'
        }

        props.dispatch({type: LOGIN, payload: datosFakeLogin});

        setTimeout(()=> {
            history.push('/');
        },500);
    }

    
    return(
        <div className="vistaLogin">
            <div onClick={()=> makeLogin()} className="botonLogin">
                Pulsa aqui para hacer el fake login
            </div>
        </div>
    )
    
    
    
}

export default connect()(Login);