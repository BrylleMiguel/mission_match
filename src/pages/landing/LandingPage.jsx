import {
   Center,
   Container,
   Flex,
   Notification,
   Text,
   Title,
} from '@mantine/core';
import React from 'react';

import { useNavigate } from 'react-router-dom';

import { BsExclamationLg } from 'react-icons/bs';

import { customButton } from '../../components/button/customButton';
import Logo from '../../components/logo/Logo';

export default function LandingPage({ setUsername, setHasLoggedIn }) {
   const navigate = useNavigate();

   return (
      <Container size={300} mt={200}>
         <Center>
            <Title>Hello! Welcome to</Title>
         </Center>
         <Logo />
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
               <Text>
                  Continuing as guest won't be able to participate in any
                  activities.
               </Text>
            </Notification>
            {customButton({
               title: 'Continue as Guest',
               fullWidth: true,
               variant: 'outline',
               radius: 'sm',
               fn: () => {
                  setHasLoggedIn(false);
                  navigate('/home');
               },
            })}
         </Flex>
      </Container>
   );

   function handleNavigation(to) {
      setHasLoggedIn(true);

      navigate(`/${to}`);
   }
}
