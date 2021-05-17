import React from 'react';

import { DarkModeIcon, LightModeIcon } from 'common/icons';

import styles from './theme-toggler.module.css';

export const ThemeToggler: React.FC = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') || 'dark'
  );

  React.useEffect(() => {
    const body = document.querySelector('body');

    body?.classList.replace(body.classList.item(0) || '', theme);
  }, [theme]);

  const className = styles['theme-toggler'];

  const handleToggle = () =>
    setTheme((prev) => {
      const newValue = prev === 'dark' ? 'light' : 'dark';

      localStorage.setItem('theme', newValue);

      return newValue;
    });

  if (theme === 'dark') {
    return <DarkModeIcon className={className} onClick={handleToggle} />;
  }

  return <LightModeIcon className={className} onClick={handleToggle} />;
};
