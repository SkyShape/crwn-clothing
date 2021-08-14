import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInSignUp from './pages/signIn-signUp-page/SignInSignUp';
import { auth } from './firebase/firebase.utils'

const HatsPage = () => (
  <div>
    <h1>HATS Page</h1>
  </div>
)

class App extends React.Component {
  constructor() {
    super()

    this.state= {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

    render(){
      return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin-signup' component={SignInSignUp} />
        </Switch>   
      </div>
     );
  }
}

export default App;
