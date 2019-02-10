import React, { Component } from 'react';
import './Discount.css';

class Cart extends Component {


    render() {
        return (
                <div className="Discount">
                <form>
                    <fieldset>
                    <legend>Bitte wählen Sie Ihren Rabatt:</legend>
                    <div className="radio-buttons">
                    <label className="radio-container" htmlFor="discount-fixed">2 Euro Rabatt
                        <input type="radio" id="discount-fixed" name="discount" value="fixed" onChange={this.props.setDiscount}>
                        </input>
                        <span className="checkmark"></span>
                    </label>


                      <label className="radio-container" htmlFor="discount-percent">10% Rabatt
                      <input type="radio" id="discount-percent" name="discount" value="percent" onChange={this.props.setDiscount}>
                      </input>
                      <span className="checkmark"></span>
                      </label>
                    </div>
                    </fieldset>
                </form>
                </div>
        )

    }
}

export default Cart;
