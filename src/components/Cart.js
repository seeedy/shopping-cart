import React, { Component } from 'react';

class Cart extends Component {


    componentDidMount() {
        console.log('props in cart', this.props);
    }

    render() {
        const { cart } = this.props;
        return (
            <div className="Cart">
                <h1>Warenkorb</h1>
                {cart && cart.cartItems.map(item => {
                    return (
                    <div key={item.id} className="cart-item">
                        <p>{item.name}</p>
                        <p>{item.quantity}</p>
                    </div>);
                })}
                <div>Gesamt: {cart.total} </div>
            </div>
        )

    }
}

export default Cart;
