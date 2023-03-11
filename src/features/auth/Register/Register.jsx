import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';

export default function Register({ accounts, setAccounts }) {
   const [errorMessage, setErrorMessage] = React.useState('');
   const [hasError, setHasError] = React.useState(false);

   return (
      <>
         <div>{hasError && errorMessage}</div>
         <RegisterForm
            accounts={accounts}
            setAccounts={setAccounts}
            setHasError={setHasError}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
         />

         <div>
            <p>already have an account:</p>
            <Link to={'/login'}>login</Link>

            <p>continue as guest:</p>
            <Link to={'/home'}>guest</Link>
         </div>
      </>
   );
}
