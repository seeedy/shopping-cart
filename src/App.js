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
                discount: 0,
                total: null
            },
            products: productList.products,
        };

        this.addToCart = this.addToCart.bind(this);
        this.getTotal = this.getTotal.bind(this);
    }


    componentDidMount() {
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

        let updatedCart;

        // if item is not yet in cart, assign quantity 1
        if (!alreadySelected) {
            addedProduct.quantity = 1;
            updatedCart = [...cartItems, addedProduct];

            this.setState({
                cart: {...this.state.cart, cartItems: updatedCart}
            });
        // if item already in cart, increase quantity by 1
        } else {
            updatedCart = cartItems.map(item => {
                if (item.id === alreadySelected.id) {
                    item.quantity++;
                }
                return item;
            });

        }


        this.setState({
            cart: {
                ...this.state.cart,
                cartItems: updatedCart
            }
        // callback after updating state to get the new sum total
        }, () => {
            this.getTotal()
        });




    }

    getTotal() {
        const { cartItems } = this.state.cart;
        // multiplying price and quantity for each item using map
        // then adding it up using reduce
        const total = cartItems.map(
            item => item.price * item.quantity).reduce(
                (acc, cv) => acc + cv );
        console.log('total', total);
        this.setState({
            ...this.state,
            cart: {
                ...this.state.cart,
                total
            }
        })
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
