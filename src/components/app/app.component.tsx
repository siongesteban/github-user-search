import React from 'react';

import { Divider } from 'common/components/divider';
import { Logo } from 'common/components/logo';
import { UserSearch } from 'components/user-search';
import { ThemeToggler } from 'components/theme-toggler';

import styles from './app.module.css';
import './app.css';

export const App: React.FC = () => (
  <>
    <div className={styles.app}>
      <div style={{ position: 'relative' }}>
        <Logo />
        <div className={styles['theme-toggler-container']}>
          <ThemeToggler />
        </div>
      </div>
      <Divider />
      <div className={styles['user-search-container']}>
        <UserSearch />
      </div>
    </div>
  </>
);
