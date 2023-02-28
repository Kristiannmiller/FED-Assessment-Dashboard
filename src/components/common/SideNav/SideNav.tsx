import React from 'react';
import logo from '../../../assets/images/RP-logo.png';

function SideNav() {
  return (
    <div className='sideNav'>
      <a className='logoWrap' href='/'>
        <img
          className='logo'
          src={logo}
          alt='Rightpoint logo link to dashboard'
        />
      </a>
      <div className='welcomeMsg'>
        <h2>Welcome, Beyonce</h2>
        <h3>Click a subject to edit/add scores</h3>
      </div>
      <ul className='navList'>
        <li>JS Fundamentals</li>
        <li>React</li>
        <li>Angular</li>
        <li>CSS</li>
        <li>Web Animations</li>
        <li>Accessibility</li>
        <li>TypeScript</li>
        <li>Solution Architecture</li>
        <li>Testing (WIP)</li>
      </ul>
    </div>
  );
}

export default SideNav;

