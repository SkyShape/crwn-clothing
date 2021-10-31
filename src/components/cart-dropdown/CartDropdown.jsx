import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import {  toggleCartHidden } from '../../redux/cart/CartAction';
import { CartDropdownContainer, CartItemsContainer, EmptyMessageSpan } from "./cartDropdownStyles";
import CustomButton from "../custom-button/CustomButton";

const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {   cartItems.length ? (
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/> )
                ) : (
                    <EmptyMessageSpan>Your card is empty</EmptyMessageSpan>
                )
            }
        </CartItemsContainer>
        <CustomButton onClick={()=>{
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>Got to Checkout
        </CustomButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));