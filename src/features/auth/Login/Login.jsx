import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

export default function Login({ accounts }) {
   const [errorMessage, setErrorMessage] = React.useState('');
   const [hasError, setHasError] = React.useState(false);

   return (
      <>
         <h1 className='underline'>MissionMatch</h1>

         <p>{hasError && errorMessage}</p>
         <LoginForm
            accounts={accounts}
            setErrorMessage={setErrorMessage}
            setHasError={setHasError}
         />

         <p>
            Don't have an account yet: <Link to={'/register'}>register</Link>
         </p>

         <p>
            continue as guest: <Link to={'/home'}>guest</Link>
         </p>
      </>
   );
}
