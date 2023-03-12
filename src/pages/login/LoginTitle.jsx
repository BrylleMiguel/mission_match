import { Center, Title } from '@mantine/core';
import React from 'react';

function LoginTitle() {
   return (
      <>
         <Center>
            <Title color='cyan.9'>Mission</Title>
            <Title color='cyan.6'>Match</Title>
         </Center>
         <Center>
            <Title order={2} color={'cyan.6'}>
               Login
            </Title>
         </Center>
      </>
   );
}

export default LoginTitle;
