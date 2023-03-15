import React from 'react';

import {
   ActionIcon,
   Avatar,
   Box,
   Divider,
   Flex,
   Stack,
   Text,
   Title,
} from '@mantine/core';

import { AiOutlineHome } from 'react-icons/ai';
import { BiLogIn, BiLogOut, BiMessageDots } from 'react-icons/bi';
import { IoIosLogIn } from 'react-icons/io';
import { MdOutlineVolunteerActivism } from 'react-icons/md';

import { CgProfile } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

export default function Navbar({
   username,
   setUsername,
   isLoggedIn,
   setIsLoggedIn,
}) {
   const navigate = useNavigate();

   return (
      <Stack h={700} justify='space-between'>
         <Box>
            <Box
               sx={(theme) => ({
                  borderRadius: theme.radius.md,
                  cursor: 'pointer',

                  '&:hover': {
                     backgroundColor:
                        theme.colorScheme === 'dark'
                           ? theme.colors.dark[5]
                           : theme.colors.gray[1],
                  },
               })}
            >
               <Flex align='center' p='sm' onClick={() => navigate('/home')}>
                  <ActionIcon variant='light'>
                     <AiOutlineHome size='1rem' />
                  </ActionIcon>
                  <Text pl='sm'>Home</Text>
               </Flex>
            </Box>

            <Box
               sx={(theme) => ({
                  borderRadius: theme.radius.md,
                  cursor: 'pointer',

                  '&:hover': {
                     backgroundColor:
                        theme.colorScheme === 'dark'
                           ? theme.colors.dark[5]
                           : theme.colors.gray[1],
                  },
               })}
            >
               <Flex align='center' p='sm' onClick={() => navigate('/inbox')}>
                  <ActionIcon variant='light' color='lime.7' opacity='1'>
                     <BiMessageDots size='1rem' />
                  </ActionIcon>
                  <Text pl='sm'>Inbox</Text>
               </Flex>
            </Box>
            <Box
               sx={(theme) => ({
                  borderRadius: theme.radius.md,
                  cursor: 'pointer',

                  '&:hover': {
                     backgroundColor:
                        theme.colorScheme === 'dark'
                           ? theme.colors.dark[5]
                           : theme.colors.gray[1],
                  },
               })}
            >
               <Flex
                  align='center'
                  p='sm'
                  onClick={() => navigate('/volunteer')}
               >
                  <ActionIcon variant='light' color='blue.7'>
                     <MdOutlineVolunteerActivism size='1rem' />
                  </ActionIcon>
                  <Text pl='sm'>Volunteer</Text>
               </Flex>
            </Box>
            {username && isLoggedIn === true && (
               <Box
                  sx={(theme) => ({
                     borderRadius: theme.radius.md,
                     cursor: 'pointer',

                     '&:hover': {
                        backgroundColor:
                           theme.colorScheme === 'dark'
                              ? theme.colors.dark[5]
                              : theme.colors.gray[1],
                     },
                  })}
               >
                  <Flex
                     align='center'
                     p='sm'
                     onClick={() => navigate('/profile')}
                  >
                     <ActionIcon variant='light' color='teal.7'>
                        <CgProfile size='1rem' />
                     </ActionIcon>
                     <Text pl='sm'>Profile</Text>
                  </Flex>
               </Box>
            )}
            {username === '' && isLoggedIn === false ? (
               <>
                  <Box
                     sx={(theme) => ({
                        borderRadius: theme.radius.md,
                        cursor: 'pointer',

                        '&:hover': {
                           backgroundColor:
                              theme.colorScheme === 'dark'
                                 ? theme.colors.dark[5]
                                 : theme.colors.gray[1],
                        },
                     })}
                  >
                     <Flex
                        align='center'
                        p='sm'
                        onClick={() => navigate('/login')}
                     >
                        <ActionIcon variant='light'>
                           <BiLogIn size='1rem' />
                        </ActionIcon>
                        <Text pl='sm'>Login</Text>
                     </Flex>
                  </Box>
                  <Box
                     sx={(theme) => ({
                        borderRadius: theme.radius.md,
                        cursor: 'pointer',

                        '&:hover': {
                           backgroundColor:
                              theme.colorScheme === 'dark'
                                 ? theme.colors.dark[5]
                                 : theme.colors.gray[1],
                        },
                     })}
                  >
                     <Flex
                        align='center'
                        p='sm'
                        onClick={() => navigate('/register')}
                     >
                        <ActionIcon variant='light'>
                           <IoIosLogIn size='1rem' />
                        </ActionIcon>
                        <Text pl='sm'>Register</Text>
                     </Flex>
                  </Box>
               </>
            ) : (
               <Box
                  sx={(theme) => ({
                     borderRadius: theme.radius.md,
                     cursor: 'pointer',

                     '&:hover': {
                        backgroundColor:
                           theme.colorScheme === 'dark'
                              ? theme.colors.dark[5]
                              : theme.colors.gray[1],
                     },
                  })}
               >
                  <Flex
                     align='center'
                     p='sm'
                     onClick={() => {
                        try {
                           setUsername('');
                           setIsLoggedIn(false);
                           navigate('/logout');
                        } catch (error) {
                           console.error(error);
                        }
                     }}
                  >
                     <ActionIcon variant='light'>
                        <BiLogOut size='1rem' />
                     </ActionIcon>
                     <Text pl='sm'>Logout</Text>
                  </Flex>
               </Box>
            )}
         </Box>
         <Box>
            <Divider pb='sm'></Divider>
            <Flex align='center' direction='row'>
               <Avatar
                  size={45}
                  src='https://source.unsplash.com/random/?man,male'
                  radius={50}
               />
               <Box pl='md'>
                  <Title order={5}>David Johnson</Title>
                  <Text>davidj@gmail.com</Text>
               </Box>
            </Flex>
         </Box>
      </Stack>
   );
}
