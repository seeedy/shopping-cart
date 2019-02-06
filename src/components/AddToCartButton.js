import React, { Component } from 'react';

class AddToCartButton extends Component {
    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }

    render() {
        return (
                <button className="AddToCartButton">
                    <p>Add to Cart</p>
                </button >
        )
    }

}

export default AddToCartButton;
