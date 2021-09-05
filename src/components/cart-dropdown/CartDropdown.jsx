import React from "react";
import CustomButton from '../custom-button/CustomButton'
import './CartDropdown.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
        </div>
        <CustomButton>Got to Checkout</CustomButton>
    </div>
)

export default CartDropdown;