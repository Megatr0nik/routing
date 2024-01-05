
// import { Router, Route } from 'react-router-dom';





import './App.css';
import { LoginContext } from './context/LoginContext';
import { useLogin } from './hooks/loginHook'
import { Header } from './components/header';
import { MainRoutes } from './route';
import { BrowserRouter as Router } from 'react-router-dom';






function App() {

  const { token, userId, data, login, logout } = useLogin();
  const isUser = !!token;
  // console.log(isUser, token)
  const route = MainRoutes(isUser);

  return (
    <LoginContext.Provider
      value={{ token, userId, data, isUser, login, logout }}
    >
      <Router>
        <Header />
        {route}
      </Router>

    </LoginContext.Provider>

  );
}

export default App;
