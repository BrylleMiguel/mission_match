import { Input } from '@mantine/core';
import _ from 'lodash';
import React from 'react';
import { TbSearch } from 'react-icons/tb';
import { events } from '../../data/events';

export default function VolunteerForm({
   searchInput,
   setSearchInput,
   setFilteredEvents,
}) {
   React.useEffect(() => {
      function filterEvents() {
         const returnedEvents = events.filter((event) => {
            return _.toLower(event.name).includes(_.toLower(searchInput));
         });

         return setFilteredEvents(returnedEvents);
      }

      filterEvents();
   }, [setFilteredEvents, searchInput]);

   return (
      <form>
         <Input
            type='text'
            icon={<TbSearch />}
            radius='md'
            placeholder='search'
            value={searchInput}
            onChange={({ target: { value } }) => {
               setSearchInput(value);
            }}
         />
      </form>
   );
}
