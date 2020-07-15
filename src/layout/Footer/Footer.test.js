import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './Footer';
import { render } from '@testing-library/react';
import labels from '../../data/labels/labels.json';
import LabelsContext from '../../features/Labels';

const footer = (
  <LabelsContext.Provider value={labels}>
    <Footer />
  </LabelsContext.Provider>
);

it('renders correctly', () => {
  const tree = renderer.create(footer).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders P.IVA and CF', () => {
  const { getByText } = render(footer);
  expect(
    getByText(/Azienda Agricola Pungilandia Rocchi Domenico/),
  ).toBeInTheDocument();
  expect(
    getByText(/P.IVA 01203140684 CF RCCDNC59R30I712B/),
  ).toBeInTheDocument();
});
