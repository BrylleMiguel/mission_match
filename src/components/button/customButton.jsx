import React from 'react';

import { Button } from '@mantine/core';

export default function CustomButton({ ...args }) {
   const { title, variant, type, fullWidth = false, radius, fn } = args;
   return (
      <Button
         variant={variant}
         fullWidth={fullWidth}
         type={type}
         radius={radius}
         onClick={fn}
      >
         {title}
      </Button>
   );
}
