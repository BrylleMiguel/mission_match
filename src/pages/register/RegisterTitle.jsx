import React from 'react';
import { Title, Center, Container } from '@mantine/core';

function LoginTitle() {
   return (
      <>
         <Center>
            <Title color='cyan.9'>Mission</Title>
            <Title color='cyan.6'>Match</Title>
         </Center>
         <Center>
            <Title order={2} color={'cyan.9'}>
               Register
            </Title>
         </Center>
      </>
   );
}

export default LoginTitle;
