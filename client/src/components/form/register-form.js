import { useState } from 'react';

import './form.css';


const RegisterForm = ({ onSubmit }) => {

    const [file, setFile] = useState();
    const [newUser, setNewUser] = useState(
        {
            email: '',
            firstName: '',
            lastName: '',
            phoneNum: '',
            login: '',
            pass: '',
            avatar: 'default_ava.jpg',
            friends: [],
            post: []
        }
    );

    const handleNewUser = (e) => {

        const { name, value, files } = e.target;

        if (name === 'avatar') {

            setFile(files[0]);
            setNewUser({
                ...newUser,
                [name]: files[0]['name']
            });
        } else {
            setNewUser({
                ...newUser,
                [name]: value
            })
        }
    }

    const onRegister = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('person', JSON.stringify(newUser));
        formData.set('avatar', file)
        // console.log(newUser, file)
        onSubmit(formData);
    }

    return (
        <>
            <h3 className="login-title">Registration</h3>
            <form
                // action='/register'
                encType="multipart/form-data"
                // target='_self'
                name='reg-form'
                className="form-container"
                // method='post'
                onSubmit={onRegister}>
                <label htmlFor="image_uploads" className='image-uploads'>Choose avatar</label>
                <input
                    style={{ display: 'none' }}
                    id="image_uploads"
                    name="avatar"
                    accept=".png, .jpg, .jpeg"
                    type="file"
                    onInput={handleNewUser}
                />
                First name:<input
                    className="login-input"
                    name='firstName'
                    type="text"
                    onChange={handleNewUser}
                    autoComplete='none'
                />
                Last Name:<input
                    className="login-input"
                    name='lastName'
                    type="text"
                    onChange={handleNewUser}
                    autoComplete='none'
                />
                Mail:<input
                    className="login-input"
                    name='email'
                    type="email"
                    onChange={handleNewUser}
                    autoComplete='none'
                />
                Password:<input
                    required
                    className="login-input"
                    name='pass'
                    type="password"
                    onChange={handleNewUser}
                    autoComplete='none'
                />
                Repeat password:<input
                    className="login-input"
                    name='pass2'
                    type="password"
                    onChange={handleNewUser}
                    autoComplete='none'
                />

                <button
                    type='submit'
                    className='submit-button'
                // name='reg-form'
                // onClick={e => console.log(e)}
                >
                    Ok
                </button>
            </form>
        </>
    );
}


export default RegisterForm;