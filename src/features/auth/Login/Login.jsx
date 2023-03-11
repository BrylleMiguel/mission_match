import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

export default function Login({ accounts }) {
   return (
      <>
         <h1>MissionMatch</h1>
         <LoginForm accounts={accounts} />

         <p>
            Don't have an account yet: <Link to={'/register'}>register</Link>
         </p>
         <p>
            continue as guest: <Link to={'/home'}>guest</Link>
         </p>
      </>
   );
}
