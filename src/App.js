import React, { Component } from 'react';
import Products from './components/Products';
import Cart from './components/Cart';
import productList from './productList.json'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: {
                cartItems: [],
                discount: 0
            },
            products: productList.products,
            total: null
        };

        this.addToCart = this.addToCart.bind(this);
        this.getTotal = this.getTotal.bind(this);
    }


    componentDidMount() {
        console.log(this.state.products);
    }

    componentDidUpdate() {
        console.log('updated State', this.state);
    }

    addToCart(e) {
        const clickedId = parseInt(e.target.id);
        const { cartItems } = this.state.cart;

        const addedProduct =
        this.state.products.find(item => item.id === clickedId);

        const alreadySelected = cartItems.find(item => item.id === addedProduct.id);

        if (!alreadySelected) {
            console.log('inside not selected');
            addedProduct.amount = 1;
            const updatedSelection = [...cartItems, addedProduct];

            this.setState({
                cart: {...this.state.cart, cartItems: updatedSelection}
            });

        } else {
            console.log('inside already selected');

            const updatedSelection = cartItems.map(item => {
                if (item.id === alreadySelected.id) {
                    item.amount++;
                }
                return item;
            });




            this.setState({
                cart: {
                    ...this.state.cart,
                    cartItems: updatedSelection
                }
            });

            this.getTotal();

        }

    }

    getTotal() {
        const { cartItems } = this.state.cart;
        const total = cartItems.map(item => {
            return item.price * item.amount;
        })
        console.log(total);
    }




  render() {
    return (

      <div className="App">
        <Products products={this.state.products} addToCart={this.addToCart}/>

        <Cart cart={this.state.cart} total={this.state.total}/>
      </div>
    );
  }
}

export default App;
