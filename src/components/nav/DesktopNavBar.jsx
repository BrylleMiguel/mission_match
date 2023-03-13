import { Container, Flex, Text } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';

export default function DesktopNavBar({
   username,
   setUsername,
   hasLoggedIn,
   setHasLoggedIn,
}) {
   return (
      <Container size={'lg'} mt={50}>
         <Flex justify={'space-between'} align='center'>
            <Logo />
            <Flex direction={'row'}>
               <Text>
                  <Link style={{ textDecoration: 'none' }} to={'/home'}>
                     home
                  </Link>
               </Text>
               <Text pl={'lg'}>
                  <Link style={{ textDecoration: 'none' }} to={'/message'}>
                     message
                  </Link>
               </Text>
               <Text pl={'lg'}>
                  <Link style={{ textDecoration: 'none' }} to={'/volunteer'}>
                     volunteer
                  </Link>
               </Text>
               {username && hasLoggedIn === true && (
                  <Text pl={'lg'}>
                     <Link style={{ textDecoration: 'none' }} to={'/profile'}>
                        profile
                     </Link>
                  </Text>
               )}
               {username === '' && hasLoggedIn === false ? (
                  <>
                     <Text pl={'lg'}>
                        <Link style={{ textDecoration: 'none' }} to={'/login'}>
                           login
                        </Link>
                     </Text>
                     <Text pl={'lg'}>
                        <Link
                           style={{ textDecoration: 'none' }}
                           to={'/register'}
                        >
                           register
                        </Link>
                     </Text>
                  </>
               ) : (
                  <Text pl={'lg'}>
                     <Link
                        onClick={() => {
                           setUsername('');
                           setHasLoggedIn(false);
                        }}
                        style={{ textDecoration: 'none' }}
                        to={'/logout'}
                     >
                        logout
                     </Link>
                  </Text>
               )}
            </Flex>
         </Flex>
      </Container>
   );
}
