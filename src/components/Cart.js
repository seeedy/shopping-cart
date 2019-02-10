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
                        <div>{item.name}</div>
                        <div className="cart-item-quantity">
                            <input id={item.id} value={item.quantity}
                            onChange={this.props.updateQuantity}>
                            </input>
                        </div>
                    </div>);
                })}
                <div>Gesamt: {cart && cart.total} </div>
            </div>
        )

    }
}

export default Cart;
