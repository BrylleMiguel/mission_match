import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Title, Container, Center, Text } from '@mantine/core';
import RegisterForm from './RegisterForm';

export default function Register({ accounts, setAccounts }) {
   const [errorMessage, setErrorMessage] = React.useState('');
   const [hasError, setHasError] = React.useState(false);

   return (
      <>
         <Center>
            <Text color={'red.7'}>{hasError && errorMessage}</Text>
         </Center>
         <RegisterForm
            accounts={accounts}
            setAccounts={setAccounts}
            setHasError={setHasError}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
         />
         <Divider my='sm' label='or' labelPosition='center' />
      </>
   );
}
