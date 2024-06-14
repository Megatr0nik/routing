
import { BrowserRouter as Router } from 'react-router-dom';
import { LoginContext } from './context/LoginContext';
import { useLogin } from './hooks/loginHook'
import { Header } from './components/header';
import { MainRoutes } from './route';
import { useHttp } from './hooks/httpHook';
import { Loader } from './components/loader/loader.js';

import './App.css';

function App() {
  const { token, userId, data, login, logout } = useLogin();
  const { loading } = useHttp();
  const isUser = !!token;
  const route = MainRoutes(isUser);

  return (
    <LoginContext.Provider
      value={{ token, userId, data, login, logout, loading }}
    >
      <Router>
        <Header />
        {loading ? <Loader /> : route}
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
