import { Button, Center, Container, Input } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { CgMail } from 'react-icons/cg';
import { TbPassword } from 'react-icons/tb';
import { MdConfirmationNumber } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';

export default function RegisterForm({
   accounts,
   setAccounts,
   setErrorMessage,
   setHasError,
}) {
   const navigate = useNavigate();
   const [inputs, setInputs] = React.useState({
      nameInput: '',
      emailInput: '',
      passwordInput: '',
      confirmPasswordInput: '',
   });

   const { nameInput, emailInput, passwordInput, confirmPasswordInput } =
      inputs;

   return (
      <form onSubmit={handleSubmit}>
         <Input
            mb='xs'
            icon={<BiUserCircle />}
            name='nameInput'
            value={nameInput}
            onChange={handleInputChange}
            type='text'
            placeholder='username'
         />
         <Input
            mb='xs'
            icon={<CgMail />}
            name='emailInput'
            value={emailInput}
            onChange={handleInputChange}
            type='text'
            placeholder='e.g. zxc@gmail.com'
         />
         <Input
            mb='xs'
            icon={<TbPassword />}
            name='passwordInput'
            value={passwordInput}
            onChange={handleInputChange}
            type='password'
            placeholder='password'
         />
         <Input
            mb='xs'
            icon={<MdConfirmationNumber />}
            name='confirmPasswordInput'
            value={confirmPasswordInput}
            onChange={handleInputChange}
            type='password'
            placeholder='confirm password'
         />

         <Center>
            <Button variant='outline' type='submit'>
               Register
            </Button>
         </Center>
      </form>
   );

   function handleInputChange(e) {
      const name = e.target.name;
      const value = e.target.value;

      setInputs({ ...inputs, [name]: value });
   }

   function handleSubmit(e) {
      e.preventDefault();

      // prettier-ignore
      if (emailInput === "" || nameInput === "" || passwordInput === "" || confirmPasswordInput === "") {
         setHasError(true);
         setErrorMessage('please check for invalid inputs');
      } else if (passwordInput !== confirmPasswordInput) {
         setHasError(true);
         setErrorMessage(`password don't match`);
      } else {
      setAccounts(() => [
         ...accounts,
         { id: uuidv4(), name: nameInput, email: emailInput, password: passwordInput },
      ]);

      navigate('/login');
      }
   }
}
