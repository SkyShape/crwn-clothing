import React from 'react'; 
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { 
    HeaderContainer,
    LogoContainer, 
    OptionLink, 
    OptionsContainer 
} from './headerStyles';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' /> 
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                (<OptionLink as='div' onClick={() => auth.signOut()}>Sign Out</OptionLink>)
                : (<OptionLink to='/signin-signup'>       
                    Sign In
                </OptionLink>)
            }
            < CartIcon />
        </OptionsContainer>
        {hidden ? null : < CartDropdown />}
    </HeaderContainer>
)

const mapStoreToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
export default connect(mapStoreToProps)(Header);