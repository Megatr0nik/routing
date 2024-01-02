
import { Routes, Route } from 'react-router-dom';


import img from './img/bird.png';


import './App.css';
import AuthPage from './pages/auth-page';
import { postRequest } from './services/request';






function App() {

  return (

    <Routes>
      <Route exact path="/" element={
        <>
          <header className="title">
            <span>BiRdie </span>
            <img src={img} alt="logo" width="32" height="32" />
          </header>

          <AuthPage post={postRequest} />

          <footer className='footer'>--- Megatr0nik ---</footer>
        </>
      } />



      {/* <Route path="*" element={<NotFound />}/> */}
    </Routes>
  );
}

export default App;
