import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { Content } from './Content';

function Header() {
  return (
    <header className='header' data-testid='header'>
      <nav>
        <div className='logo'>
          <img src='/images/logo.png' alt='Todoist' />
        </div>
        <div className='settings'>
          <ul>
            <li>+</li>
            <li>
              <FaPizzaSlice />
            </li>
            <Content />
          </ul>
        </div>
      </nav>
    </header>
  );
}

export { Header };
