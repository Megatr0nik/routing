import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './pages/main-page';
import AuthPage from './pages/auth-page';


export const MainRoutes = isUser => {
    console.log(isUser)
    if (isUser) {
        return (
            <>

                <Routes>
                    <Route path="/main" exact element={isUser && <Main />} />
                </Routes>
                <Navigate to="/main" replace={true} />
            </>

        )
    }

    return (
        <>

            <Routes>
                <Route path="/" exact element={<AuthPage />} />
            </Routes>
            <Navigate to="/" replace={true} />
        </>


    )
}