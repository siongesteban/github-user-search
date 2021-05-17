import React from 'react';

import styles from './avatar.module.css';

export type AvatarProps = {
  name: string;
  src?: string;
};

export const Avatar: React.FC<AvatarProps> = ({ name, src }) => {
  if (!src) {
    const [firstName, lastName] = name.split(' ');

    const initials = `${firstName.charAt(0)}${
      lastName?.charAt(0) || ''
    }`.toUpperCase();

    return <div className={styles.avatar}>{initials}</div>;
  }

  return <img className={styles.avatar} src={src} alt={name} title={name} />;
};
