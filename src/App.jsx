import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './features/auth/Login';
import Logout from './features/auth/Logout';
import Register from './features/auth/Register';
import { v4 as uuidv4 } from 'uuid';

import './index.css';

function App() {
   const [username, setUsername] = React.useState('');
   const [hasLoggedIn, setHasLoggedIn] = React.useState(false);

   const [accounts, setAccounts] = React.useState([
      {
         id: uuidv4(),
         name: 'David Johnson',
         email: 'davidj@gmail.com',
         password: 'david123',
      },
   ]);

   return (
      <>
         <Routes>
            <Route
               path='/'
               element={
                  <>
                     <p>Hello!</p>
                     <p>continuing as guest won't be able to apply for jobs.</p>
                     <div>
                        <Link to={'login'}>login</Link>
                        <br />
                        <Link to={'register'}>register</Link>
                        <br />
                        <Link to={'home'}>continue as guest</Link>
                     </div>
                  </>
               }
            />
            <Route
               path='/home'
               element={
                  <Home
                     username={username}
                     setUsername={setUsername}
                     hasLoggedIn={hasLoggedIn}
                     setHasLoggedIn={setHasLoggedIn}
                  />
               }
            />
            <Route path='/login' element={<Login accounts={accounts} />} />
            <Route
               path='/register'
               element={
                  <Register accounts={accounts} setAccounts={setAccounts} />
               }
            />
            <Route path='/logout' element={<Logout />} />
         </Routes>
      </>
   );
}

export default App;
