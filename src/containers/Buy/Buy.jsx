
import React from 'react';

import {connect} from 'react-redux';

const Buy = (props) => {

    return(

        <div>
            {JSON.stringify(props.cart)}
            {JSON.stringify(props.totalCart)}
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