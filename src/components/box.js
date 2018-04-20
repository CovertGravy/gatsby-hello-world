import React from 'react';

export default ({children}) => (
  <div style={{background: 'teal', color: 'white', border: '2px outset black', width: 500, height: 300, maxWidth: 500}}>
    {children}
  </div>
)