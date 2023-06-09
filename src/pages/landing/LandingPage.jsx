import {
   Center,
   Container,
   Flex,
   Notification,
   Text,
   Title,
} from '@mantine/core';
import React from 'react';
import { BsExclamationLg } from 'react-icons/bs';

import { useNavigate } from 'react-router-dom';

import CustomButton from '../../components/button';
import Logo from '../../components/logo/Logo';

export default function LandingPage({ setUsername, setIsLoggedIn }) {
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
            <CustomButton
               title='Login'
               fullWidth={true}
               variant='outline'
               radius='sm'
               fn={() => handleNavigation('login')}
            />
            <CustomButton
               title='Register'
               fullWidth={true}
               variant='outline'
               radius='sm'
               fn={() => handleNavigation('register')}
            />
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
            <CustomButton
               title='Continue as Guest'
               fullWidth={true}
               variant='outline'
               radius='sm'
               fn={() => {
                  setUsername('');
                  setIsLoggedIn(false);
                  navigate('/home');
               }}
            />
         </Flex>
      </Container>
   );

   function handleNavigation(to) {
      setIsLoggedIn(true);

      navigate(`/${to}`);
   }
}
