import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

export const withRouter = (PassedComponent) => ({ children, ...props }) => (
  <BrowserRouter>
    <Switch>
      <PassedComponent {...props}>{children}</PassedComponent>
    </Switch>
  </BrowserRouter>
);
