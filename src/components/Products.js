import React, { Component } from 'react';

class Products extends Component {
    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidMount() {
    }

    clickHandler(e) {
        this.props.addToCart(e);
    }

    render() {
        const { products } = this.props;


        return(
            <div className="Products">
                <h1>Products</h1>
                {products && products.map(product => {
                    return (
                        <div
                            className="product"
                            key={product.id}
                        >
                            <p>{product.name}</p>
                            <p>{product.price.toFixed(2)} €</p>
                            <button id={product.id} onClick={this.clickHandler}>
                                Add to cart
                            </button>
                        </div>
                    )
                })}
            </div>
        )

    }
}

export default Products;
