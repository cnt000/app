import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import Header from './Header';
import labels from '../../data/labels/labels.json';
import LabelsContext from '../../features/Labels';

const setMenuOpenMock = jest.fn();

const header = (
  <LabelsContext.Provider value={labels}>
    <Header setMenuOpen={() => setMenuOpenMock(true)} />
  </LabelsContext.Provider>
);

it('renders correctly', () => {
  const tree = renderer.create(header).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders Logo title and subtitle', () => {
  const { getByText } = render(header);
  expect(getByText(/Pungilandia/)).toBeInTheDocument();
  expect(getByText(/Piante grasse, strane ed insolite/)).toBeInTheDocument();
});

describe('Click open menu without enzyme', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.clearAllMocks();
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('click open button call setMenuOpenMock without enzyme', () => {
    act(() => {
      ReactDOM.render(
        header,
        container,
      );
    });
    const button = container.querySelector('button.burger');

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(setMenuOpenMock).toHaveBeenCalled();
  });
});
