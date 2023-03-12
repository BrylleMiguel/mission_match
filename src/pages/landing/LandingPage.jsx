import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
   return (
      <>
         <p>Hello!</p>
         <p>continuing as guest won't be able to apply for jobs.</p>
         <div>
            <Link to={'login'}>login</Link>
            <br />
            <Link to={'register'}>register</Link>
            <br />
            <Link to={'home'}>continue as guest</Link>
         </div>
      </>
   );
}
