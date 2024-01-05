import { useContext, useState } from "react"
import { LoginContext } from "../context/LoginContext";

import { postRequest } from "../services/request"
// import Request from "../services/requestWorker";




const AuthPage = () => {

    const logindata = useContext(LoginContext)

    // console.log(logindata)

    const [data, setData] = useState({
        email: '',
        password: ''
    });


    const handlerData = (e) => {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value
        });
    }


    const onRegistration = () => {
        postRequest(data, '/api/register')
    }

    const onLogin = async () => {
        const incoming = await postRequest(data, '/api/login');

        const { token, userId, name, avatar, date, friends, posts } = incoming;
        logindata.login(token, userId, {
            name,
            avatar,
            date,
            friends,
            posts
        });


    }


    return (
        <>
            <h1>Сторінка авторизації</h1>

            <div className="auth-form-container">
                {/* <form
                    encType="multipart/form-data"
                    name="auth-form"
                    onSubmit={onSubmit}
                > */}
                <input
                    type="email"
                    name="email"
                    autoComplete="on"
                    onChange={handlerData}
                />
                <input
                    type="password"
                    name="password"
                    autoComplete="off"
                    onChange={handlerData}
                />

                <button
                    name="auth"
                    value="login"
                    onClick={onLogin}

                >Login</button>

                <button
                    name="auth"
                    value="register"
                    onClick={onRegistration}

                >Register</button>
                {/* </form> */}
            </div>


        </>

    )
}



export default AuthPage;