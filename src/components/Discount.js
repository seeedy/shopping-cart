import React, { Component } from 'react';
import './Discount.css';
import discountSettings from '../discountSettings.json';

class Cart extends Component {


    render() {
        const { discounts } = discountSettings;
        return (
                <div className="Discount">
                <form>
                    <fieldset>
                    <legend>Bitte wählen Sie Ihren Rabatt:</legend>
                    <div className="radio-buttons">
                    <label className="radio-container" htmlFor="discount-fixed">{discounts.fixed} Euro Rabatt
                        <input type="radio" id="discount-fixed" name="discount" value="fixed" onChange={this.props.setDiscount}>
                        </input>
                        <span className="checkmark"></span>
                    </label>


                      <label className="radio-container" htmlFor="discount-percent">{discounts.percent * 100}% Rabatt
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
