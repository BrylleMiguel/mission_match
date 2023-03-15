import { Button, Card, Grid, Image, Text, Title } from '@mantine/core';
import React from 'react';

import { BsBoxArrowInDownRight } from 'react-icons/bs';
import { FaSeedling } from 'react-icons/fa';

export default function VolunteerItem({ ...event }) {
   const { id, image, name, organizer, location, date, description } = event;
   console.log(event);
   return (
      <Grid.Col key={id} md={6} lg={3}>
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
}
