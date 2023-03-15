import React from 'react';

import { Avatar, Box, Divider, Flex, Stack, Text, Title } from '@mantine/core';

import { AiOutlineHome } from 'react-icons/ai';
import { BiLogIn, BiLogOut, BiMessageDots } from 'react-icons/bi';
import { IoIosLogIn } from 'react-icons/io';
import { MdOutlineVolunteerActivism } from 'react-icons/md';

import _ from 'lodash';
import { CgProfile } from 'react-icons/cg';
import NavItem from './NavItem';

export default function Navbar({
   accounts,
   username,
   isLoggedIn,
   setUsername,
   setIsLoggedIn,
}) {
   const [email, setEmail] = React.useState('');

   React.useEffect(() => {
      const getAccounts = async () => {
         accounts.map((account) => {
            console.log(account);
            return username === account.name && setEmail(account.email);
         });
      };

      getAccounts();
   }, []);

   return (
      <Stack h={700} justify='space-between'>
         <Box>
            <NavItem
               name='Home'
               to='home'
               icon={<AiOutlineHome size='1rem' />}
            />
            <NavItem
               name='Inbox'
               to='inbox'
               icon={<BiMessageDots size='1rem' />}
               iconColor='lime.7'
            />
            <NavItem
               name='Volunteer'
               to='volunteer'
               icon={<MdOutlineVolunteerActivism size='1rem' />}
               iconColor='blue.7'
            />

            {username && isLoggedIn === true && (
               <NavItem
                  name='Profile'
                  to='profile'
                  icon={<CgProfile size='1rem' />}
                  iconColor='teal.7'
               />
            )}
            {username === '' && isLoggedIn === false ? (
               <>
                  <NavItem
                     name='Login'
                     to='login'
                     icon={<BiLogIn size='1rem' />}
                  />
                  <NavItem
                     name='Register'
                     to='register'
                     icon={<IoIosLogIn size='1rem' />}
                  />
               </>
            ) : (
               <NavItem
                  setUsername={setUsername}
                  setIsLoggedIn={setIsLoggedIn}
                  isLogoutLinkClicked={true}
                  name='Logout'
                  to='logout'
                  icon={<BiLogOut size='1rem' />}
               />
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
                  <Title order={5}>{_.capitalize(username)}</Title>
                  <Text>{email}</Text>
               </Box>
            </Flex>
         </Box>
      </Stack>
   );
}
