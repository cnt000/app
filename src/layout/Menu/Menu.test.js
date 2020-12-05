import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Menu from './Menu';
import labels from '../../data/labels/labels.json';
import LabelsContext from '../../features/Labels';

configure({ adapter: new Adapter() });
const setMenuOpenMock = jest.fn();

const menuComponent = (
  <Menu isOpen={true} setMenuOpen={setMenuOpenMock} />
);

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

  it('click close button call setMenuOpenMock', () => {
    const renderedComponent = shallow(menuComponent);
    renderedComponent.find('button.close').first().simulate('click');
    expect(setMenuOpenMock).toHaveBeenCalled();
  });

  it('has class open if isOpen is true', () => {
    const renderedComponent = shallow(menuComponent);
    expect(renderedComponent.find('.open').length).toBe(1);
  });
});

describe('Click without enzyme', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('click close button call setMenuOpenMock without enzyme', () => {
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

  test('renders home', () => {
    const { getByText } = render(<Router>{menuComponentWithLabels}</Router>);
    expect(getByText(/Home/)).toBeInTheDocument();
  });
});
