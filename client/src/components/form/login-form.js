
import { useState } from 'react';
import './form.css';

const LoginForm = ({ onSubmit }) => {

    const [data, setData] = useState({
        email: '',
        pass: ''
    });

    const onLogin = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('person', JSON.stringify(data));
        onSubmit(formData);
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <h3 className="login-title">Login</h3>
            <form
                encType="multipart/form-data"
                name='reg-form'
                className="form-container"
                onSubmit={onLogin}
            >
                Login:<input
                    className="login-input"
                    name='email'
                    type="text"
                    onChange={handleChange}
                    autoComplete='none'
                /><br></br>
                Password:<input
                    className="login-input"
                    name='pass'
                    type="password"
                    onChange={handleChange}
                    autoComplete='none'
                />
                <button
                    type='submit'
                    className='submit-button'
                >
                    Ok
                </button>
            </form>
        </>

    );

}

export default LoginForm;