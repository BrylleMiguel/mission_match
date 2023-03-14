import { Center, Divider, Text } from '@mantine/core';
import React from 'react';
import LoginForm from './LoginForm';

export default function Login({ accounts, setUsername, setIsLoggedIn }) {
   const [errorMessage, setErrorMessage] = React.useState('');
   const [hasError, setHasError] = React.useState(false);

   return (
      <>
         <Center>
            <Text color={'red.4'}>{hasError && errorMessage}</Text>
         </Center>
         <LoginForm
            accounts={accounts}
            setErrorMessage={setErrorMessage}
            setHasError={setHasError}
            setUsername={setUsername}
            setIsLoggedIn={setIsLoggedIn}
         />
         <Divider my='sm' label='or' labelPosition='center' />
      </>
   );
}
