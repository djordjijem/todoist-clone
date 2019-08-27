import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { Sidebar } from './Sidebar';

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
            <Sidebar />
          </ul>
        </div>
      </nav>
    </header>
  );
}

export { Header };