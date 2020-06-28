import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Menu from './Menu';

configure({ adapter: new Adapter() });
const setMenuOpenMock = jest.fn();
const menuComponent = (
  <Menu isOpen={true} setMenuOpen={setMenuOpenMock} Link={Link} />
);

describe('Menu', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          menuComponent
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('click close button call setMenuOpenMock', () => {
    const renderedComponent = shallow(
      menuComponent,
    );
    renderedComponent.find('button.close').first().simulate('click');
    expect(setMenuOpenMock).toHaveBeenCalled();
  });

  it('has class open if isOpen is true', () => {
    const renderedComponent = shallow(
      menuComponent,
    );
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
    // Test first render and componentDidMount
    act(() => {
      ReactDOM.render(
        <Router>
          <Menu isOpen={true} setMenuOpen={setMenuOpenMockWE} Link={Link} />
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
});
