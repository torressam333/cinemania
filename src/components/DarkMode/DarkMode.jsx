import React from 'react';

import './DarkMode.css';
import Sun from './Sun.svg?react';
import Moon from './Moon.svg?react';

const DarkMode = () => {
  return (
    <div className='dark_mode'>
      <input className='dark_mode_input' type='checkbox' id='darkmode-toggle' />
      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
