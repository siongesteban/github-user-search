import React from 'react';

import { OrganizationIcon, UserIcon } from 'common/icons';

export type UserTypeIconProps = {
  type: 'Organization' | 'User';
};

export const UserTypeIcon: React.FC<UserTypeIconProps> = ({ type }) => {
  const Component = type === 'Organization' ? OrganizationIcon : UserIcon;

  return <Component style={{ width: 21 }} title={type} />;
};
