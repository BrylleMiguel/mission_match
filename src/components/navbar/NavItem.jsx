import { ActionIcon, Box, Flex, Text } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavItem({ ...args }) {
   const {
      name,
      to,
      icon,
      iconColor,
      isLogoutLinkClicked,
      setUsername,
      setIsLoggedIn,
   } = args;
   const navigate = useNavigate();

   return (
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
               if (isLogoutLinkClicked) {
                  setUsername('');
                  setIsLoggedIn(false);
               }
               navigate(`/${to}`);
            }}
         >
            <ActionIcon variant='light' color={iconColor}>
               {icon}
            </ActionIcon>
            <Text pl='sm'>{name}</Text>
         </Flex>
      </Box>
   );
}
