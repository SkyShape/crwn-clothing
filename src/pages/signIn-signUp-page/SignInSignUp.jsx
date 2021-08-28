import React from 'react' 
import './SignInSignUp.scss'
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'

const SignInSignUp = () => (
    <div className="signIn-signUp">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInSignUp