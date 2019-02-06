import React, { Component } from 'react';

class Cart extends Component {


    componentDidMount() {
        console.log(this.props);
    }

    render() {
        const { cart, total } = this.props;
        return (
            <div className="Cart">
                <h1>Warenkorb</h1>
                {cart && cart.cartItems.map(item => {
                    return (
                    <div key={item.id} className="cart-item">
                        <p>{item.name}</p>
                        <p>{item.amount}</p>
                    </div>);
                })}
                <div>Gesamt: {total}</div>
            </div>
        )

    }
}

export default Cart;
