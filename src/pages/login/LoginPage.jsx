import { Center, Text, Title, Flex, Container } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../features/auth/Login';
import LoginTitle from './LoginTitle';

export default function LoginPage({ accounts }) {
   return (
      <Container size={300} mt={200}>
         <Flex direction={'column'}>
            <LoginTitle />
            <Login accounts={accounts} />
            <Center>
               <Text color='dark.4'>
                  Don't have an account yet:{' '}
                  <Link to={'/register'}>register</Link>
               </Text>
            </Center>

            <Center>
               <Text color={'dark.4'}>
                  continue as guest: <Link to={'/home'}>guest</Link>
               </Text>
            </Center>
         </Flex>
      </Container>
   );
}
