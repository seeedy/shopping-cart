import React, { Component } from 'react';
import Discount from './Discount';

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
                            <input
                            type="number"
                            min="1"
                            id={item.id}
                            value={item.quantity}
                            onChange={this.props.updateQuantity}>
                            </input>
                        </div>
                    </div>);
                })}
                {cart.subtotal && <div className="discount">
                        <Discount setDiscount={this.props.setDiscount}/>
                        <div>Zwischensumme: {cart.subtotal.toFixed(2)}</div>
                        <div>Rabatt: {((cart.total - cart.subtotal) || 0 ).toFixed(2)}</div>
                        <div>Gesamt: {(cart.total || cart.subtotal).toFixed(2)}</div>
                </div>}
            </div>
        )

    }
}

export default Cart;
