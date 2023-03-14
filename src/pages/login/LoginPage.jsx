import { Center, Container, Flex, Text } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../features/auth/Login';
import LoginTitle from './LoginTitle';

export default function LoginPage({ accounts, setUsername, setIsLoggedIn }) {
   return (
      <Container size={300} mt={200}>
         <Flex direction={'column'}>
            <LoginTitle />
            <Login
               accounts={accounts}
               setUsername={setUsername}
               setIsLoggedIn={setIsLoggedIn}
            />
            <Center>
               <Text>
                  Don't have an account yet:{' '}
                  <Link to={'/register'}>register</Link>
               </Text>
            </Center>
            <Center>
               <Text>
                  Continue as guest: <Link to={'/home'}>guest</Link>
               </Text>
            </Center>
         </Flex>
      </Container>
   );
}
