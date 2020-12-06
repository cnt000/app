import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from './Menu';
import labels from '../../data/labels/labels.json';
import LabelsContext from '../../features/Labels';

const setMenuOpenMock = jest.fn();

const menuComponentWithLabels = (
  <LabelsContext.Provider value={labels}>
    <Menu isOpen={true} setMenuOpen={setMenuOpenMock} />
  </LabelsContext.Provider>
);

describe('Menu', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<Router>{menuComponentWithLabels}</Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Click ', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('click close button call setMenuOpenMock', () => {
    const setMenuOpenMockWE = jest.fn();

    act(() => {
      ReactDOM.render(
        <Router>
          <Menu isOpen={true} setMenuOpen={setMenuOpenMockWE} />
        </Router>,
        container,
      );
    });
    const button = container.querySelector('button.close');

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(setMenuOpenMockWE).toHaveBeenCalled();
  });

  it('has class open if isOpen is true', () => {
    const setMenuOpenMockWE = jest.fn();

    act(() => {
      ReactDOM.render(
        <Router>
          <Menu isOpen={true} setMenuOpen={setMenuOpenMockWE} />
        </Router>,
        container,
      );
    });
    expect(container.querySelectorAll('.open').length).toBe(1);
  });

  test('renders home', () => {
    const { getByText } = render(<Router>{menuComponentWithLabels}</Router>);
    expect(getByText(/Home/)).toBeInTheDocument();
  });
});
