import React from 'react';
import { Sidebar } from './Sidebar';
import { Tasks } from '../Tasks';

function Content() {
  return (
    <section className='content'>
      <Sidebar />
      <Tasks />
    </section>
  );
}

export { Content };
