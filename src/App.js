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
        this.updateQuantity = this.updateQuantity.bind(this);
        this.setDiscount = this.setDiscount.bind(this);
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
        const { cartItems, discount } = this.state.cart;
        // multiplying price and quantity for each item using map
        // then adding up using reduce
        const subtotal = cartItems.map(
            item => item.price * item.quantity).reduce(
                (acc, cv) => acc + cv );
        let total;
        if (discount === 'fixed') {
            total = subtotal - 2;
        } else if (discount === 'percent') {
            total = 0.9 * subtotal;
        }
        console.log('total', total);
        this.setState({
            ...this.state,
            cart: {
                ...this.state.cart,
                subtotal,
                total
            }
        })
    }

    setDiscount(e) {
        console.log('inside setDiscount', e.target.value);
        let discount;
        if (e.target.value === "fixed") {
            discount = 'fixed';
        }

        if (e.target.value === "percent") {
            discount = 'percent';
        }

        this.setState({
            ...this.state,
            cart: {
                ...this.state.cart,
                discount
            }
        }, () => {
            this.getTotal();
        });

    }

    updateQuantity(e) {
        console.log(e.target.value);
        const clickedId = parseInt(e.target.id);
        const { cartItems } = this.state.cart;

        const updatedItem = cartItems.find(item => item.id === clickedId);

        updatedItem.quantity = e.target.value;

        const updatedCartItems = cartItems.map(item => {
            if (item.id === clickedId) {
                item.quantity = e.target.value;
            }
            return item;
        });

        console.log('updatedItem', updatedItem);
        console.log('updatedCartItems', updatedCartItems);

        this.setState({
            ...this.state,
            cart: {
                ...this.state.cart,
                cartItems: updatedCartItems
                }
        }, () => {
            this.getTotal()
        });

    }




  render() {
    return (

      <div className="App">
        <Products products={this.state.products} addToCart={this.addToCart}/>

        <Cart cart={this.state.cart} subtotal={this.state.subtotal}
        updateQuantity={this.updateQuantity} setDiscount={this.setDiscount}/>
      </div>
    );
  }
}

export default App;
