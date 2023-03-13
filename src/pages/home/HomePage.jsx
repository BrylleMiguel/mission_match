import { Container, Flex, Image, ScrollArea, Title } from '@mantine/core';
import React from 'react';

export default function HomePage({ username, hasLoggedIn }) {
   return (
      <Container size={'lg'} mt={'lg'}>
         <ScrollArea h={600}>
            <Flex justify='start' align='center'>
               <Image
                  width={50}
                  height={50}
                  src={
                     username
                        ? 'https://source.unsplash.com/random/?man,male'
                        : 'https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
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
