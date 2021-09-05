import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInSignUp from './pages/signIn-signUp-page/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/UserActions';

const HatsPage = () => (
  <div>
    <h1>HATS Page</h1>
  </div>
)

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            })
          console.log(this.state)
        })
      } 
      setCurrentUser(userAuth)
    })
   
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

    render(){
      return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin-signup' render={()=>this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUp />)} />
        </Switch>   
      </div>
     );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps )(App);
