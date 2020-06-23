import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import Page from './Page';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import labels from '../../data/labels/labels.json';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer.create(<Page />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Click without enzyme', () => {
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
    const wrapper = shallow(
      <Page {...labels}>
        <span>abc</span>
      </Page>,
    );
    expect(wrapper.find(Header).length).toBe(1);
    expect(wrapper.find(Menu).length).toBe(1);
    expect(wrapper.find(Footer).length).toBe(1);
    // expect(wrapper.find(Son)).toHaveLength(1); // Should be exactly 1 Son element
    // expect(wrapper.find(Son).props().message1).toEqual('this is required');
  });

  it('render Header with setMenuOpen prop', () => {
    const wrapper = shallow(
      <Page {...labels}>
        <span>abc</span>
      </Page>,
    );
    expect(wrapper.find(Header).length).toBe(1);
    expect(wrapper.find(Header).props().setMenuOpen).toEqual(
      expect.any(Function),
    );
  });

  it('render Menu with setMenuOpen prop', () => {
    const wrapper = shallow(
      <Page {...labels}>
        <span>abc</span>
      </Page>,
    );
    expect(wrapper.find(Menu).length).toBe(1);
    expect(wrapper.find(Menu).props().setMenuOpen).toEqual(
      expect.any(Function),
    );
    expect(wrapper.find(Menu).props().isOpen).toEqual(expect.any(Boolean));
  });

});
