import React, { Component } from 'react';
import './Products.css';

class Products extends Component {
    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }


    clickHandler(e) {
        this.props.addToCart(e);
    }

    render() {
        const { products } = this.props;


        return(
            <div className="Products">
                <h1>Produktauswahl</h1>
                {products && products.map(product => {
                    return (
                        <div className="product" key={product.id}>
                            <p>{product.name}</p>
                            <p>{product.price.toFixed(2)} €</p>

                            <div className="add-to-cart-button">
                                <i id={product.id} onClick={this.clickHandler} className="fas fa-shopping-cart"></i>
                            </div>

                        </div>)
                })}
            </div>
        )}
}

export default Products;
