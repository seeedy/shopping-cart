import React, { Component } from 'react';
import Products from './components/Products';
import Cart from './components/Cart';
import productList from './productList.json';
import discountSettings from './discountSettings.json'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: {
                cartItems: [],
                discount: 0,
                subtotal: null,
                total: null
            },
            products: productList.products,
        };

        this.addToCart = this.addToCart.bind(this);
        this.getTotal = this.getTotal.bind(this);
        this.removeCartItem = this.removeCartItem.bind(this);
        this.setDiscount = this.setDiscount.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
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
        // then adding up using reduce to get subtotal
        let subtotal;
        if (cartItems.length) {
            subtotal = cartItems.map(
                item => item.price * item.quantity).reduce(
                    (acc, cv) => acc + cv );
        } else {
            subtotal = null;
        }


        // calculate total with fixed or percentage discount
        const { discounts } = discountSettings;
        let total;

        if (discount === 'fixed') {
            total = subtotal - discounts.fixed;
        } else if (discount === 'percent') {
            total = (1 - discounts.percent) * subtotal;
        }

        this.setState({
            ...this.state,
            cart: {
                ...this.state.cart,
                subtotal,
                total
            }
        })
    }

    removeCartItem(e) {
        const clickedId = parseInt(e.target.id);
        console.log(clickedId);

        const { cartItems } = this.state.cart;

        const itemToRemove =
        cartItems.find(item => item.id === clickedId);

        console.log(itemToRemove);

        const updatedCart = cartItems.filter(item => {
            return item.id !== clickedId
        });

            this.setState({
                ...this.state,
                cart: {
                    ...this.state.cart,
                    cartItems: updatedCart
                }
            }, () => {
                this.getTotal();
            });

    }

    setDiscount(e) {
        //set chosen discount in state
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
        // update item quantity on user input
        const clickedId = parseInt(e.target.id);
        const quant = parseInt(e.target.value);
        const { cartItems } = this.state.cart;

        if (quant > 0) {
            const updatedCartItems = cartItems.map(item => {
                if (item.id === clickedId) {
                    item.quantity = e.target.value;
                }
                return item;
            });

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

    }


  render() {
    return (

      <div className="App">
        <Products
        products={this.state.products}
        addToCart={this.addToCart}
        />

        <Cart
        cart={this.state.cart}
        subtotal={this.state.subtotal}
        removeCartItem={this.removeCartItem}
        updateQuantity={this.updateQuantity} setDiscount={this.setDiscount}
        />
      </div>
    );
  }
}

export default App;
