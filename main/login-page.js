
import { useState } from 'react';
import './login-page.css';

const LoginPage = () => {

    const [login, onLogin] = useState('');
    const [pass, onPass] = useState('');


    const userLogin = (e) => {
        onLogin(e.target.value);
    }

    const userPass = (e) => {
        onPass(e.target.value)
    }

    const onSubmit = () => {


        console.log(localStorage.setItem(0, JSON.stringify({ 'login': login, 'pass': pass })));
    }


    return (
        <div className="login-container">
            <h3 className="login-title">Login</h3>
            <form
                // action='index.html'
                target='_self'
                className="form-container"
                method='post'
                onSubmit={onSubmit}>
                Login:<input
                    className="login-input"
                    name='login'
                    type="text"
                    // defaultValue=''
                    onChange={userLogin}
                    autoComplete='none'
                /><br></br>
                Password:<input
                    className="login-input"
                    name='password'
                    type="password"
                    // defaultValue=''
                    onChange={userPass}
                    autoComplete='none'
                />
                <input
                    className='submit-button'
                    type="submit"
                    value='Login' />
            </form>
        </div>
    );
}


export default LoginPage;