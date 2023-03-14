import { ActionIcon, Flex, Text } from '@mantine/core';
import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { MdVolunteerActivism } from 'react-icons/md';
import { SiGmail } from 'react-icons/si';
import { TbSmartHome } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({
   username,
   setUsername,
   isLoggedIn,
   setIsLoggedIn,
}) {
   const navigate = useNavigate();

   return (
      <Flex direction='column'>
         <Flex align='center' p='sm' onClick={() => navigate('/home')}>
            <ActionIcon variant='outline'>
               <TbSmartHome size='1rem' />
            </ActionIcon>
            <Text pl='sm' style={{ cursor: 'pointer' }}>
               Home
            </Text>
         </Flex>

         <Flex align='center' p='sm' onClick={() => navigate('/inbox')}>
            <ActionIcon variant='outline'>
               <SiGmail size='1rem' />
            </ActionIcon>
            <Text pl='sm' style={{ cursor: 'pointer' }}>
               Inbox
            </Text>
         </Flex>
         <Flex align='center' p='sm' onClick={() => navigate('/volunteer')}>
            <ActionIcon variant='outline'>
               <MdVolunteerActivism size='1rem' />
            </ActionIcon>
            <Text pl='sm' style={{ cursor: 'pointer' }}>
               Volunteer
            </Text>
         </Flex>
         {username && isLoggedIn === true && (
            <Text>
               <Link style={{ textDecoration: 'none' }} to={'/profile'}>
                  profile
               </Link>
            </Text>
         )}
         {username === '' && isLoggedIn === false ? (
            <>
               <Text>
                  <Link style={{ textDecoration: 'none' }} to={'/login'}>
                     login
                  </Link>
               </Text>
               <Text>
                  <Link style={{ textDecoration: 'none' }} to={'/register'}>
                     register
                  </Link>
               </Text>
            </>
         ) : (
            <Flex
               align='center'
               p='sm'
               onClick={() => {
                  setUsername('');
                  setIsLoggedIn(false);

                  navigate('/logout');
               }}
            >
               <ActionIcon variant='outline'>
                  <BiLogOut size='1rem' />
               </ActionIcon>
               <Text pl='sm' style={{ cursor: 'pointer' }}>
                  Logout
               </Text>
            </Flex>
         )}
      </Flex>
   );
}
