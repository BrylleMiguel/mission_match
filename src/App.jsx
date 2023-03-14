import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import {
   AppShell,
   ColorSchemeProvider,
   Flex,
   Header,
   MantineProvider,
   Navbar,
} from '@mantine/core';

import DarkLightMode from './components/dark_light_mode/darkLightMode';
import CNavbar from './components/navbar/CNavbar';

import Logo from './components/logo/Logo';
import HomePage from './pages/home';
import LandingPage from './pages/landing';
import LoginPage from './pages/login';
import LogoutPage from './pages/logout';
import RegisterPage from './pages/register';

function App() {
   const navigate = useNavigate();
   const location = useLocation();

   // stored accounts
   const [accounts, setAccounts] = React.useState([
      {
         id: uuidv4(),
         name: 'David Johnson',
         email: 'davidj@gmail.com',
         password: 'david123',
      },
   ]);

   // get user username when logged in if loggedIn
   const [username, setUsername] = React.useState(() => {
      const savedUsername = localStorage.getItem('username');
      return savedUsername !== null ? savedUsername : '';
   });

   // check if user is logged in
   const [isLoggedIn, setIsLoggedIn] = React.useState(() => {
      const savedLoggedIn = localStorage.getItem('isLoggedIn');
      return savedLoggedIn !== null ? JSON.parse(savedLoggedIn) : false;
   });

   // color scheme
   const [colorScheme, setColorScheme] = React.useState(() => {
      const savedMode = localStorage.getItem('colorScheme');
      return savedMode !== null ? savedMode : 'dark';
   });

   const toggleColorScheme = () => {
      setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
   };

   React.useEffect(() => {
      navigateToHome();
   }, []);

   // persists state
   React.useEffect(() => {
      localStorage.setItem('colorScheme', colorScheme);
      localStorage.setItem('username', username);
      localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
   }, [colorScheme, username, isLoggedIn]);

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
            <AppShell
               hidden={
                  location.pathname === '/' ||
                  location.pathname === '/login' ||
                  location.pathname === '/register' ||
                  location.pathname === '/logout'
               }
               padding='md'
               navbar={
                  <Navbar width={{ base: 250 }} p='xs'>
                     <CNavbar />
                  </Navbar>
               }
               header={
                  <Header height={60} p='xs'>
                     <Flex justify='space-between' align='center'>
                        <Logo />
                        <DarkLightMode />
                     </Flex>
                  </Header>
               }
               styles={(theme) => ({
                  main: {
                     backgroundColor:
                        theme.colorScheme === 'dark'
                           ? theme.colors.dark[8]
                           : theme.colors.gray[0],
                  },
               })}
            >
               <Routes>
                  <Route
                     path='/'
                     element={
                        <LandingPage
                           setIsLoggedIn={setIsLoggedIn}
                           setUsername={setUsername}
                        />
                     }
                  />

                  <Route
                     path='/login'
                     element={
                        <LoginPage
                           accounts={accounts}
                           setIsLoggedIn={setIsLoggedIn}
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
                           setIsLoggedIn={setIsLoggedIn}
                        />
                     }
                  />

                  <Route
                     path='/home'
                     element={
                        <HomePage username={username} isLoggedIn={isLoggedIn} />
                     }
                  />
               </Routes>
            </AppShell>
         </MantineProvider>
      </ColorSchemeProvider>
   );

   function navigateToHome() {
      return username && isLoggedIn ? navigate('/home') : navigate('/');
   }
}

export default App;
