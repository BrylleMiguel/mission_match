import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({ accounts, setHasError, setErrorMessage }) {
   const navigate = useNavigate();

   const [credentials, setCredentials] = React.useState({
      emailInput: '',
      passwordInput: '',
   });

   const { emailInput, passwordInput } = credentials;

   return (
      <form onSubmit={handleSubmit} method='POST'>
         <input
            name='emailInput'
            value={emailInput}
            onChange={handleInputChange}
            type='text'
            placeholder='zxc@gmail.com'
         />
         <input
            name='passwordInput'
            value={passwordInput}
            onChange={handleInputChange}
            type='password'
            placeholder='password'
         />

         <button disabled={!emailInput.includes('@gmail.com')}>login</button>
      </form>
   );

   function handleSubmit(e) {
      e.preventDefault();

      accounts.map((account) => {
         const { email, password } = account;

         if (email === emailInput && password === passwordInput) {
            setHasError(false);
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
