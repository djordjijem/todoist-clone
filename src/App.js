import React from 'react';
import { Header, Content } from './components';
import { ProjectsProvider, SelectedProjectProvider } from './context';

function App() {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className='App'>
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;
