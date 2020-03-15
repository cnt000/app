import React, { useState, useRef, useEffect } from 'react';
import useFetch from 'use-http';

const domain = process.env.REACT_APP_API_DOMAIN;
const url = `${domain}/api/v1/search/0`;

const productList = ({ name, href, image, price, add, page }) => (
  <section>
    <img alt={name} src={image} />
    <br />
    <a href={href}>name: {name}</a>
    <br />
    <div>price: {price}</div>
    <a href={add}>Add</a>
    {page}
  </section>
);

const ProductList = () => {
  const [itemList, setItemList] = useState([]);

  const [request, response] = useFetch(url);

  // componentDidMount
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    initializeItemList();
  });

  async function initializeItemList() {
    const initialItem = await request.get();
    if (response.ok) setItemList(initialItem);
  }

  return (
    <>
      {request.error && 'Error!'}
      {request.loading && 'Loading...'}
      {itemList.map(productList)}
    </>
  );
}

export default ProductList;
