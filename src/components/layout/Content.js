import React from 'react';
import { Sidebar } from './Sidebar';
import { Tasks } from '../Tasks';

function Content() {
  return (
    <section>
      <Sidebar />
      <Tasks />
    </section>
  );
}

export { Content };
