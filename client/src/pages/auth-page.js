import { useState } from "react"




const AuthPage = ({post}) => {

const [data, setData] = useState({
    email: '',
    password: '',
    auth: ''
});


const handlerData = (e) => {
    const {name, value} = e.target;

    setData({
        ...data,
        [name]: value
    });
}

const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('data', JSON.stringify(data));
    post(formData, `/${data.auth}`)
    console.log(post);
}


    return (
        <>
            <h1>Сторінка авторизації</h1>

            <div className="auth-form-container">
                <form
                encType="multipart/form-data"
                name="auth-form"
                onSubmit={onSubmit}
                >
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
                    onClick={handlerData}
                    
                    >Login</button>

                    <button
                    name="auth"
                    value="register"
                    onClick={handlerData}

                    >Register</button>
                </form>
            </div>


        </>

    )
}



export default AuthPage;