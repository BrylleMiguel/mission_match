import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { BsSun, BsMoonStars } from 'react-icons/bs';

export default function DarkLightMode() {
   const { colorScheme, toggleColorScheme } = useMantineColorScheme();
   const dark = colorScheme === 'dark';

   return (
      <ActionIcon
         variant='outline'
         color={dark ? 'yellow' : 'blue'}
         onClick={() => toggleColorScheme()}
         title='dark/light mode'
      >
         {dark ? <BsSun /> : <BsMoonStars />}
      </ActionIcon>
   );
}
