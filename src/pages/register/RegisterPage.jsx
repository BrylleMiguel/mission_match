import { BackgroundImage, Center, Container, Flex, Text } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Register from '../../features/auth/Register';
import RegisterTitle from './RegisterTitle';

function RegisterPage({ accounts, setAccounts }) {
   return (
      <Container size={300} mt={200}>
         <Flex direction='column'>
            <RegisterTitle />
            <Register accounts={accounts} setAccounts={setAccounts} />

            <Center>
               <Text color='dark.4'>
                  Already have an account: <Link to={'/login'}>login</Link>
               </Text>
            </Center>
            <Center>
               <Text color='dark.4'>
                  Continue as guest: <Link to={'/home'}>guest</Link>
               </Text>{' '}
            </Center>
         </Flex>
      </Container>
   );
}

export default RegisterPage;
