import { Box, Container, ScrollArea, Title } from '@mantine/core';
import React from 'react';

export default function HomePage({ username, hasLoggedIn }) {
   return (
      <Container size={'lg'} mt={'lg'}>
         <ScrollArea h={700}>
            <Box>
               <Title>Hi {username ? username : 'User'}!</Title>
            </Box>
         </ScrollArea>
      </Container>
   );
}
