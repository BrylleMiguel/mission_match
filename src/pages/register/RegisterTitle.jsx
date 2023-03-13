import { Center, Title } from '@mantine/core';
import React from 'react';
import Logo from '../../components/logo/Logo';

function LoginTitle() {
   return (
      <>
         <Logo />
         <Center>
            <Title order={2} color={'cyan.9'}>
               Register
            </Title>
         </Center>
      </>
   );
}

export default LoginTitle;
