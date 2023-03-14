import React from 'react';

import { Container, Flex, Image, Title } from '@mantine/core';

import _ from 'lodash';

export default function HomePage({ username, isLoggedIn }) {
   return (
      <Container size={'lg'} mt={'lg'}>
         <Flex justify='start' align='center'>
            <Image
               width={60}
               height={60}
               src={
                  username
                     ? 'https://source.unsplash.com/random/?man,male'
                     : 'logo.png'
               }
               title={username ? 'profile picture' : 'default picture'}
               radius={50}
            />
            <Title order={3} pl={'sm'}>
               Hi {username && isLoggedIn ? _.capitalize(username) : 'User'}!
            </Title>
         </Flex>
      </Container>
   );
}
