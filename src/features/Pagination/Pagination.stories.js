import React from 'react';

import Pagination from './Pagination';
import { withLabels } from '../Labels/withLabels';
import { withRouter } from '../Router/withRouter';

export default {
  component: Pagination,
  title: 'Pagination',
};
const firstPage = () => (
  <Pagination isSearch={false} page={0} searchQuery={'agave'} />
);

const paginationSearch = () => (
  <Pagination isSearch={true} page={1} searchQuery={'nigra'} />
);

const lastPage = () => (
  <Pagination isSearch={true} page={4} searchQuery={'nigra'} />
);

export const FirstPage = withLabels(withRouter(firstPage));
export const Search = withLabels(withRouter(paginationSearch));
export const LastPage = withLabels(withRouter(lastPage));
