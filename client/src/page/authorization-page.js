
import { useState } from 'react';


import Main from './main-page';
import LoginForm from '../components/form/login-form';
import RegisterForm from '../components/form/register-form';


import './authorization-page.css';
import { postRequest } from '../services/request';

export const AuthorizationPage = () => {

    const [reg, setReg] = useState(false);
    const [acces, setAcess] = useState(false);
    const [userData, setUserData] = useState({});
    const [wrong, setWrong] = useState({ warning: false, data: '' });



    const onReg = (event) => {
        setReg(event.target.checked)
    }

    const onWarning = (warnStr) => {
        setWrong({ warning: true, data: warnStr });
        setTimeout(() => setWrong({ warning: false, data: '' }), 5000);
    }

    const onSubmit = (data) => {

        console.log(data);
        // postRequest(data, `/user/avatar`)
        if (reg === false) {
            postRequest(data, '/person/login')
                .then(d => {
                    if (typeof d === 'string') {
                        onWarning(d);
                    } else {
                        setUserData(d);
                        setAcess(!acces);
                    }
                }).catch(err => console.log(err));
        } else {
            postRequest(data, '/person/register')
                .then(d => {
                    if (typeof d === 'string') {
                        onWarning(d);
                    } else {
                        // postRequest(data, `/users/${d._id}/avatar`)
                        // .then(() => {
                        setUserData(d);
                        setReg(!reg);
                        setAcess(true);
                        // })
                        // .catch(err => console.log(err))
                    }
                })
                .catch(err => console.log(err));
        }
    }

    if (!acces) {
        return (
            <>
                {<h3 className='warning-info'
                    style={wrong.warning ? { display: 'flex' } : { display: 'none' }}
                >
                    {wrong.data}
                </h3>}
                <div className="authorization-container">
                    {
                        reg ? <RegisterForm onSubmit={onSubmit} />
                            : <LoginForm onSubmit={onSubmit} />
                    }
                    <label>
                        Registration
                        <input
                            className=''
                            name='reg'
                            type="checkbox"
                            checked={reg}
                            onChange={onReg}
                        />
                    </label>
                </div>
            </>

        );

    } else {
        return <Main props={userData} />
    }
}
