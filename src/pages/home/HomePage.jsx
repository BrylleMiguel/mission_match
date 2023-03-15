import React from 'react'

import { Avatar, Flex, Title } from '@mantine/core'

import _ from 'lodash'

export default function HomePage({ username, isLoggedIn }) {
   return (
      <Flex justify='start' align='center'>
         <Avatar
            src={
               username
                  ? 'https://source.unsplash.com/random/?man,male'
                  : 'logo.png'
            }
            radius={50}
         />
         <Title order={3} pl={'sm'}>
            Hi {username && isLoggedIn ? _.capitalize(username) : 'User'}!
         </Title>
      </Flex>
   )
}
