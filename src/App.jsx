import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './features/auth/Login';
import Logout from './features/auth/Logout';
import Register from './features/auth/Register';
import { v4 as uuidv4 } from 'uuid';

import HomePage from './pages/home/HomePage';
import LandingPage from './pages/landing/landingPage';
import LoginPage from './pages/login';
import RegisterPage from './pages/register/RegisterPage';
import LogoutPage from './pages/logout';
import { MantineProvider } from '@mantine/core';

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

   console.log(accounts);

   return (
      <MantineProvider
         theme={{
            fontFamily: 'Yantramanav',
         }}
         withGlobalStyles
         withNormalizeCSS
      >
         <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route
               path='/home'
               element={
                  <HomePage
                     username={username}
                     setUsername={setUsername}
                     hasLoggedIn={hasLoggedIn}
                     setHasLoggedIn={setHasLoggedIn}
                  />
               }
            />

            <Route path='/login' element={<LoginPage accounts={accounts} />} />
            <Route
               path='/register'
               element={
                  <RegisterPage accounts={accounts} setAccounts={setAccounts} />
               }
            />
            <Route path='/logout' element={<LogoutPage />} />
         </Routes>
      </MantineProvider>
   );
}

export default App;
