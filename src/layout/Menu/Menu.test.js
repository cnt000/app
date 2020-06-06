import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Menu from './Menu';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer.create(<Menu />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('click close button call setMenuOpenMock', () => {
  const setMenuOpenMock = jest.fn();
  const renderedComponent = shallow(
    <Menu isOpen={true} setMenuOpen={setMenuOpenMock} />,
  );

  renderedComponent.find('button.close').first().simulate('click');
  expect(setMenuOpenMock).toHaveBeenCalled();
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
        <Menu isOpen={true} setMenuOpen={setMenuOpenMockWE} />,
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
