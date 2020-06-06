import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import Header from './Header';
import labels from '../../data/labels/labels.json';

it('renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Click open menu without enzyme', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('click open button call setMenuOpenMock without enzyme', () => {
    const setMenuOpenMockWE = jest.fn();
    act(() => {
      ReactDOM.render(
        <Header {...labels} setMenuOpen={setMenuOpenMockWE} />,
        container,
      );
    });
    const button = container.querySelector('button.burger');

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(setMenuOpenMockWE).toHaveBeenCalled();
  });
});
