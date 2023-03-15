import { Button, Card, Flex, Grid, Image, Text, Title } from '@mantine/core';
import React from 'react';
import { BsBoxArrowInDownRight } from 'react-icons/bs';

import { FaSeedling } from 'react-icons/fa';

import VolunteerForm from './VolunteerForm';

export default function Volunteer() {
   const [searchInput, setSearchInput] = React.useState('');
   const [filteredEvents, setFilteredEvents] = React.useState([]);

   console.log(filteredEvents);
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
               const { id, name, location, description, organizer, date, image, } = event;
               return (
                  <Grid.Col key={id} span={'auto'}>
                     <Card shadow='sm' radius='md' withBorder>
                        <Card.Section>
                           <Image src={image} height={200} alt={name} />
                        </Card.Section>

                        <Title order={4} weight={500} mt='sm'>
                           {name}
                        </Title>
                        <Text size='sm'>Date: {date}</Text>

                        <Text size='sm' color='dimmed'>
                           Organizer: {organizer}
                        </Text>

                        <Text size='sm' color='dimmed'>
                           Location: {location}
                        </Text>
                        <Text lineClamp={2} size='sm' color='dimmed'>
                           {description}
                        </Text>

                        <Button.Group>
                           <Button
                              leftIcon={<BsBoxArrowInDownRight />}
                              variant='light'
                              color='blue'
                              fullWidth
                              mt='md'
                              radius='md'
                           >
                              View
                           </Button>
                           <Button
                              leftIcon={<FaSeedling />}
                              variant='filled'
                              color='blue'
                              fullWidth
                              mt='md'
                              radius='md'
                           >
                              Participate
                           </Button>
                        </Button.Group>
                     </Card>
                  </Grid.Col>
               );
            })}
         </Grid>
      </>
   );
}
