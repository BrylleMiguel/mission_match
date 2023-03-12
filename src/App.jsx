import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Link, Outlet, Route, Routes } from 'react-router-dom';

import {
   Affix,
   Center,
   ColorSchemeProvider,
   Flex,
   MantineProvider,
   rem,
} from '@mantine/core';

import LandingPage from './pages/landing';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import LogoutPage from './pages/logout';
import Navbar from './components/nav/NavBar';
import DarkLightMode from './components/darkLightMode/darkLightMode';

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

   const [colorScheme, setColorScheme] = React.useState('light');
   const toggleColorScheme = () =>
      setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

   return (
      <ColorSchemeProvider
         colorScheme={colorScheme}
         toggleColorScheme={toggleColorScheme}
      >
         <MantineProvider
            theme={{
               fontFamily: 'Yantramanav',
               colorScheme,
            }}
            withGlobalStyles
            withNormalizeCSS
         >
            <Affix position={{ top: rem(20), right: rem(20) }}>
               <DarkLightMode />
            </Affix>
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

               <Route
                  element={
                     <>
                        <Navbar />
                        <Outlet />
                     </>
                  }
               >
                  <Route
                     path='/home'
                     element={
                        <HomePage
                           username={username}
                           hasLoggedIn={hasLoggedIn}
                        />
                     }
                  />
               </Route>
            </Routes>
         </MantineProvider>
      </ColorSchemeProvider>
   );
}

export default App;
