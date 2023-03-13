import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Outlet, Route, Routes } from 'react-router-dom';

import {
   Affix,
   ColorSchemeProvider,
   MantineProvider,
   rem,
} from '@mantine/core';

import DarkLightMode from './components/darkLightMode/darkLightMode';
import DesktopNavBar from './components/nav/DesktopNavBar';
import HomePage from './pages/home';
import LandingPage from './pages/landing';
import LoginPage from './pages/login';
import LogoutPage from './pages/logout';
import RegisterPage from './pages/register';

function App() {
   const [username, setUsername] = React.useState(() => {
      const savedUsername = localStorage.getItem('username');
      return savedUsername !== null ? savedUsername : '';
   });

   const [hasLoggedIn, setHasLoggedIn] = React.useState(() => {
      const savedLoggedIn = localStorage.getItem('hasLoggedIn');
      return savedLoggedIn !== null ? JSON.parse(savedLoggedIn) : false;
   });

   // persists state

   React.useEffect(() => {
      localStorage.setItem('username', username);
      localStorage.setItem('hasLoggedIn', JSON.stringify(hasLoggedIn));
   }, [username, hasLoggedIn]);

   const [accounts, setAccounts] = React.useState([
      {
         id: uuidv4(),
         name: 'David Johnson',
         email: 'davidj@gmail.com',
         password: 'david123',
      },
   ]);

   const [colorScheme, setColorScheme] = React.useState('light');
   const toggleColorScheme = () => {
      setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
   };

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
                     />
                  }
               />

               <Route
                  path='/logout'
                  element={
                     <LogoutPage
                        setUsername={setUsername}
                        setHasLoggedIn={setHasLoggedIn}
                     />
                  }
               />

               <Route
                  element={
                     <>
                        <DesktopNavBar
                           username={username}
                           setUsername={setUsername}
                           hasLoggedIn={hasLoggedIn}
                           setHasLoggedIn={setHasLoggedIn}
                        />
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
