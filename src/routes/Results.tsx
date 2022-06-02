import React from 'react';
import windowsLogo from './windowslogo.svg';
import { Outlet, Link } from 'react-router-dom';

class Results extends React.Component<any, any, any>
{
  render()
  {
    console.log("hello results world");
    return (
        <div>
            <p>
                Hello World!
            </p>
        </div>
    );
  }
}
export default Results;