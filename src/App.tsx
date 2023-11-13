import React from 'react';
import { root } from './files';
import Folder from './Folder/Folder';

export default function App() {
  return (
    <div className='container'>
      <header>
        Bright HR Tree        
        <div style={{ padding: '10px' }}>
          {root.files?.map((folder, i) => (
            <Folder key={i} folder={folder} depth={1}/>
          ))}
        </div>
      </header>
    </div>
  );
};