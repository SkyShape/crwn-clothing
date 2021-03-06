import React from 'react' 
import FormInput from '../form-input/FormInput';
import './SignIn.scss'
import CustomButton from '../custom-button/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

       
    }
    handleSubmit = async event => {
            event.preventDefault();

            const {email, password} = this.state;
            
            try {
                await auth.signInWithEmailAndPassword(email, password);
                this.setState({email:'', password:''})
            } catch(error){
                console.log(error);
            }
            
        }

    handleChange = event =>{
        const {value, name}= event.target;

        this.setState({[name]: value})
    }


    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    label="email"                    
                    type="email"
                    required  />
                    
                    <FormInput 
                        name="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="password"
                        type="password"
                        required  
                    />
                    <div className="buttons">
                        <CustomButton type="submit"> Sign In</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}Sign In with Google{' '}
                        </CustomButton>
                    </div>

                   
                </form>

            </div>

        )
    }
}

export default SignIn