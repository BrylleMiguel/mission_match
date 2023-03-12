import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Link, Route, Routes } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';

import LandingPage from './pages/landing';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import LogoutPage from './pages/logout';

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

   console.log({ accounts });

   return (
      <MantineProvider
         theme={{
            fontFamily: 'Yantramanav',
         }}
         withGlobalStyles
         withNormalizeCSS
      >
         <Routes>
            <Route
               path='/'
               element={
                  <LandingPage
                     setHasLoggedIn={setHasLoggedIn}
                     setUsername={setUsername}
                  />
               }
            />
            <Route
               path='/home'
               element={
                  <HomePage username={username} hasLoggedIn={hasLoggedIn} />
               }
            />

            <Route
               path='/login'
               element={
                  <LoginPage
                     accounts={accounts}
                     setHasLoggedIn={setHasLoggedIn}
                     setUsername={setUsername}
                  />
               }
            />

            <Route
               path='/register'
               element={
                  <RegisterPage
                     accounts={accounts}
                     setAccounts={setAccounts}
                     setUsername={setUsername}
                  />
               }
            />

            <Route path='/logout' element={<LogoutPage />} />
         </Routes>
      </MantineProvider>
   );
}

export default App;
