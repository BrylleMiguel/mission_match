import { Button, Card, Grid, Image, Text, Title } from '@mantine/core';
import { BsBoxArrowInDownRight } from 'react-icons/bs';

import { FaSeedling } from 'react-icons/fa';

import { events } from '../../data/events';

export default function Volunteer() {
   return (
      <>
         <Title>Volunteer</Title>
         <Grid>
            {events.map((event) => {
               // prettier-ignore
               const { id, name, location, description, organizer, date, image, } = event;
               return (
                  <Grid.Col key={id} span={'auto'}>
                     <Card shadow='sm' padding='lg' radius='md' withBorder>
                        <Card.Section>
                           <Image src={image} height={160} alt='Norway' />
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
                              leftIcon={<BsBoxArrowInDownRight size={17} />}
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
