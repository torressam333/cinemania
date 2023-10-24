import { useState, useEffect } from 'react';

import './DarkMode.css';
import Sun from '../../assets/Sun.svg?react';
import Moon from '../../assets/Moon.svg?react';

const DarkMode = () => {
  const selectedTheme = () => localStorage.getItem('theme');
  const [theme, setTheme] = useState(selectedTheme || 'light');
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  useEffect(() => {
    document.querySelector('body').setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    setIsDarkMode(theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleTheme}
        checked={isDarkMode}
      />
      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
