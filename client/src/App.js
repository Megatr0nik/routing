
import { BrowserRouter as Router } from 'react-router-dom';

import { LoginContext } from './context/LoginContext';
import { UserContext } from './context/UserContext.js';
import { useLogin } from './hooks/loginHook'
import { Header } from './components/header';
import { MainRoutes } from './route';

import './App.css';
import { useHttp } from './hooks/httpHook';
import { Loader } from './components/loader/loader.js';
import { useGallery } from './hooks/galleryHook.js';

function App() {

  const { addFoto, getGallery, arrCollection, gallery } = useGallery();
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
        {loading ? <Loader /> : <UserContext.Provider
          value={{ addFoto, getGallery, arrCollection, gallery }}
        >
          {route}
        </UserContext.Provider>}
      </Router>

    </LoginContext.Provider>

  );
}

export default App;
