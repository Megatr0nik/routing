import { Switch, Route, Redirect, Routes } from 'react-router-dom';
import Main from './pages/main-page';
import AuthPage from './pages/auth-page';


export const MainRoutes = ({ isUser }) => {

    if (isUser) {
        return (

            // <Routes>
            //     <Route path="/main" exact>
            <Main />
            //     </Route>

            // </Routes>



        )
    }

    return (
        // <Routes>
        //     <Route path="/" exact>
        //         <>
        <AuthPage />
        // </>

        //     </Route>

        // </Routes>

    )
}