import { Container, Flex, Image, ScrollArea, Title } from '@mantine/core';
import React from 'react';

export default function HomePage({ username, hasLoggedIn }) {
   return (
      <Container size={'lg'} mt={'lg'}>
         <ScrollArea h={600}>
            <Flex justify='start' align='center'>
               <Image
                  maw={50}
                  src={
                     username
                        ? 'https://source.unsplash.com/random/?man,male'
                        : 'logo.png'
                  }
                  title={username ? 'profile picture' : 'default picture'}
                  radius={50}
               />
               <Title order={3} pl={'sm'}>
                  Hi {username && hasLoggedIn ? username : 'User'}!
               </Title>
            </Flex>
         </ScrollArea>
      </Container>
   );
}
