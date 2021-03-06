import React from 'react';
import { connect } from 'react-redux';
//import { Link } from "react-router-dom";
import { createStructuredSelector } from 'reselect';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';
import './header.styles.scss';
const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink className='option' to='/shop'>SHOP</OptionLink>
            <OptionLink className='option' to='/shop'>CONTACT</OptionLink>
            {
                currentUser ? 
                <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
                :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {   hidden ? null :
            <CartDropdown />
        }
        
    </HeaderContainer>
    // <div className='header'>
    //     <Link className='logo-container' to="/">
    //         <Logo className='logo' />
    //     </Link>
    //     <div className='options'>
    //         <Link className='option' to='/shop'>SHOP</Link>
    //         <Link className='option' to='/shop'>CONTACT</Link>
    //         {
    //             currentUser ? 
    //             <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
    //             :
    //             <Link className='option' to='/signin'>SIGN IN</Link>
    //         }
    //         <CartIcon />
    //     </div>
        
    // </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);