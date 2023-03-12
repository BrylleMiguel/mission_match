import { Center, Container, Divider, Text } from '@mantine/core';
import React from 'react';
import LoginForm from './LoginForm';

export default function Login({ accounts }) {
   const [errorMessage, setErrorMessage] = React.useState('');
   const [hasError, setHasError] = React.useState(false);

   return (
      <>
         <Center>
            <Text color={'red.8'}>{hasError && errorMessage}</Text>
         </Center>
         <LoginForm
            accounts={accounts}
            setErrorMessage={setErrorMessage}
            setHasError={setHasError}
         />
         <Divider my='sm' />
      </>
   );
}
