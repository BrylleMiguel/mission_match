import { Button } from '@mantine/core';
import React from 'react';

export function customButton({ ...args }) {
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
