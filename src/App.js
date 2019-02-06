import React, { Component } from 'react';
import Products from './components/Products';
import Cart from './components/Cart';
import productList from './productList.json'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: productList.products,
            cart: {
                selectedProducts: [],
                discount: 0
            }
        };

        this.addToCart = this.addToCart.bind(this);
    }


    componentDidMount() {
        console.log(this.state.products);
    }

    componentDidUpdate() {
        console.log('updated State', this.state);
    }

    addToCart(e) {
        const clickedId = parseInt(e.target.id);
        const { selectedProducts } = this.state.cart;

        const addedProduct =
        this.state.products.find(item => item.id === clickedId);

        const alreadySelected = selectedProducts.find(item => item.id === addedProduct.id);

        if (!alreadySelected) {
            console.log('inside not selected');
            addedProduct.amount = 1;
            const updatedSelection = [...selectedProducts, addedProduct];

            this.setState({
                cart: {...this.state.cart, selectedProducts: updatedSelection}
            });

        } else {
            console.log('inside already selected');

            const updatedAmount = alreadySelected.amount + 1;
            const updatedProduct = {
                ...alreadySelected,
                amount: updatedAmount
            };

            const updatedSelection = [...selectedProducts.filter(item => item.id !== alreadySelected.id), updatedProduct];

            this.setState({
                cart: {...this.state.cart, selectedProducts: updatedSelection}
            });

        }
    }




  render() {
    return (

      <div className="App">
        <Products products={this.state.products} addToCart={this.addToCart}/>

        <Cart />
      </div>
    );
  }
}

export default App;
