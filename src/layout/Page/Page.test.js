import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import Page from './Page';
import labels from '../../data/labels/labels.json';
import LabelsContext from '../../features/Labels';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <LabelsContext.Provider value={labels}>
        <Router>
          <Page>{<p>test</p>}</Page>
        </Router>
      </LabelsContext.Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Click', () => {
  let container;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    jest.clearAllMocks();
  });

  it('render Header, Menu, Footer', () => {
    act(() => {
      ReactDOM.render(
        <Router>
          <Page {...labels}>
            <span>abc</span>
          </Page>
        </Router>,
        container,
      );
    });
    expect(container.querySelectorAll('header').length).toBe(1);
    expect(container.querySelectorAll('.menu').length).toBe(1);
    expect(container.querySelectorAll('footer').length).toBe(1);
  });
});
