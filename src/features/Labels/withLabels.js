import React from 'react';
import labels from '../../data/labels/labels.json';
import LabelsContext from '../../features/Labels';

export const withLabels = (PassedComponent) => ({ children, ...props }) => (
  <LabelsContext.Provider value={labels}>
    <PassedComponent {...props}>{children}</PassedComponent>
  </LabelsContext.Provider>
);
