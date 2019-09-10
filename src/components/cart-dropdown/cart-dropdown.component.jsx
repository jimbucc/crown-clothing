import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

import { CartDropdownContainer, CartItems, CartButton } from './cart-dropdown.styles';

const CartDropdown = () => (
    // <CartDropdownContainer>
    //     <CartItems />
    //     <CustomButton style={{marginTop: 'auto'}}>GO TO CHECKOUT</CustomButton>
    // </CartDropdownContainer>
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)
export default CartDropdown