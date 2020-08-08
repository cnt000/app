import React from 'react';
import { action } from '@storybook/addon-actions';

import Header from './Header';
import { withLabels } from '../../features/Labels/withLabels';

export default {
  component: Header,
  title: 'Header',
};

const actionsData = {
  setMenuOpen: action('setMenuOpen(true)'),
};

const header = () => <Header {...actionsData} />;

export const Default = withLabels(header);
