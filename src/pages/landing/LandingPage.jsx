import {
   Box,
   Button,
   Center,
   Container,
   Flex,
   Notification,
   Text,
   Title,
} from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { customButton } from '../../components/button/customButton';

import { BsExclamationLg } from 'react-icons/bs';

export default function LandingPage({ setUsername, setHasLoggedIn }) {
   const navigate = useNavigate();

   return (
      <Container size={300} mt={200}>
         <Center>
            <Title color={'dark.6'}>Hello! Welcome to</Title>
         </Center>
         <Center>
            <Flex direction={'row'}>
               <Title color={'cyan.9'}>Mission</Title>
               <Title color={'cyan.6'}>Match</Title>
            </Flex>
         </Center>
         <Flex
            mt={'xs'}
            mih={50}
            gap='xs'
            justify='flex-start'
            align='flex-start'
            direction='column'
         >
            {customButton({
               title: 'Login',
               fullWidth: true,
               variant: 'outline',
               radius: 'sm',
               fn: () => handleNavigation('login'),
            })}
            {customButton({
               title: 'Register',
               fullWidth: true,
               variant: 'outline',
               radius: 'sm',
               fn: () => handleNavigation('register'),
            })}
            <Notification
               color={'red'}
               mt='sm'
               icon={<BsExclamationLg />}
               withCloseButton={false}
            >
               continuing as guest won't be able to apply for jobs.
            </Notification>
            {customButton({
               title: 'Continue as Guest',
               fullWidth: true,
               variant: 'outline',
               radius: 'sm',
               fn: () => handleNavigation('home'),
            })}
         </Flex>
      </Container>
   );

   function handleNavigation(to) {
      setHasLoggedIn(true);

      navigate(`/${to}`);
   }
}
