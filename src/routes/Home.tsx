import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Home()
{
  return (
    <div className='Home'>
        <p> <Link to = "/">Lost Ark</Link> </p>
        <a href="https://tekken-character-quiz.netlify.app/" target="_blank">Tekken (Vue 2)</a>
    </div>
  );
}
export default Home;