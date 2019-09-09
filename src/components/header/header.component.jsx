import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

const Header = ({ currentUser }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink className='option' to='/shop'>SHOP</OptionLink>
            <OptionLink className='option' to='/shop'>CONTACT</OptionLink>
            {
                currentUser ? 
                <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
        </OptionsContainer>
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
    //     </div>
    // </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);