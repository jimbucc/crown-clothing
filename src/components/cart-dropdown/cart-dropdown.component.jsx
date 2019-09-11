import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

//import { CartDropdownContainer, CartItems, CartButton } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems }) => (
    // <CartDropdownContainer>
    //     <CartItems />
    //     <CustomButton style={{marginTop: 'auto'}}>GO TO CHECKOUT</CustomButton>
    // </CartDropdownContainer>
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)
// Destructured state.cart to get the cartItems array 
const mapStateToProps = ({ cart: { cartItems }}) => ({
    cartItems
});

export default connect(mapStateToProps, null)(CartDropdown)