import { Button, Center, Input } from '@mantine/core';
import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { TbPassword } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({
   accounts,
   setHasError,
   setErrorMessage,
   setUsername,
   setIsLoggedIn,
}) {
   const navigate = useNavigate();

   const [credentials, setCredentials] = React.useState({
      emailInput: '',
      passwordInput: '',
   });

   const { emailInput, passwordInput } = credentials;

   return (
      <form onSubmit={handleSubmit} method='POST'>
         <Input
            mb={'xs'}
            icon={<BiUserCircle />}
            name='emailInput'
            value={emailInput}
            onChange={handleInputChange}
            type='text'
            placeholder='e.g. zxc@gmail.com'
         />
         <Input
            mb={'xs'}
            icon={<TbPassword />}
            name='passwordInput'
            value={passwordInput}
            onChange={handleInputChange}
            type='password'
            placeholder='password'
         />

         <Center>
            <Button
               type='submit'
               variant={'outline'}
               disabled={!emailInput.includes('@gmail.com')}
            >
               login
            </Button>
         </Center>
      </form>
   );

   function handleSubmit(e) {
      e.preventDefault();

      return accounts.map((account) => {
         const { name, email, password } = account;

         if (email === emailInput && password === passwordInput) {
            setHasError(false);
            setUsername(name);
            setIsLoggedIn(true);

            navigate('/home');
         } else {
            setHasError(true);
            setErrorMessage('credentials not found.');
         }
      });
   }

   function handleInputChange(e) {
      const name = e.target.name;
      const value = e.target.value;

      setCredentials({ ...credentials, [name]: value });
   }
}
