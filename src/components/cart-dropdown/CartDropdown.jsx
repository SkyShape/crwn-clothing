import React from "react";
import { connect } from 'react-redux';
import CustomButton from '../custom-button/CustomButton'
import './CartDropdown.scss';
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/> )
            }
        </div>
        <CustomButton>Got to Checkout</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);