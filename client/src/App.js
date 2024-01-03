
// import { Router, Route } from 'react-router-dom';





import './App.css';
// import AuthPage from './pages/auth-page';
// import { postRequest } from './services/request';
import { LoginContext } from './context/LoginContext';
import { useLogin } from './hooks/loginHook'
import { Header } from './components/header';
import { MainRoutes } from './route';
import { Routes } from 'react-router-dom';






function App() {

  const { token, userId, login, logout } = useLogin();
  const isUser = !!token;
  const route = MainRoutes(isUser);

  return (
    <LoginContext.Provider
      value={{ token, userId, isUser, login, logout }}
    >
      <>
        <Header />
        {/* <Routes> */}
        {route}
        {/* </Routes> */}

        {/* <MainRoutes  /> */}
      </>

    </LoginContext.Provider>

  );
}

export default App;
