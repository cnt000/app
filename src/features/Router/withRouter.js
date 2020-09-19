import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (PassedComponent) => ({ children, ...props }) => (
  <BrowserRouter>
      <PassedComponent {...props}>{children}</PassedComponent>
  </BrowserRouter>
);
