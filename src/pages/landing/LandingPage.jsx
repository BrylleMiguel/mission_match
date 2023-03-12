import React from 'react';
import {
   Center,
   Container,
   Flex,
   Notification,
   Text,
   Title,
} from '@mantine/core';

import { useNavigate } from 'react-router-dom';

import { BsExclamationLg } from 'react-icons/bs';

import { customButton } from '../../components/button/customButton';

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
               mt='sm'
               color={'red'}
               icon={<BsExclamationLg color='white' size={25} />}
               withCloseButton={false}
            >
               <Text color={'dark.5'}>
                  Continuing as guest won't be able to apply for jobs.
               </Text>
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
