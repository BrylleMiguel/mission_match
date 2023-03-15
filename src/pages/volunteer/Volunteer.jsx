import { Flex, Grid, Title } from '@mantine/core';
import React from 'react';

import VolunteerForm from './VolunteerForm';
import VolunteerItem from './VolunteerItem';

export default function Volunteer() {
   const [searchInput, setSearchInput] = React.useState('');
   const [filteredEvents, setFilteredEvents] = React.useState([]);

   return (
      <>
         <Flex align='center' justify='space-between' my='md'>
            <Title>Upcoming Activities</Title>
            <VolunteerForm
               searchInput={searchInput}
               setSearchInput={setSearchInput}
               filteredEvents={filteredEvents}
               setFilteredEvents={setFilteredEvents}
            />
         </Flex>
         <Grid>
            {filteredEvents.map((event) => {
               // prettier-ignore
               return <VolunteerItem key={event.id} {...event} />;
            })}
         </Grid>
      </>
   );
}
