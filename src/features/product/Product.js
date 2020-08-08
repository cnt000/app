import React, { useState, useRef, useEffect } from 'react';
import useFetch from 'use-http';

const domain = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:8080';
const url = `${domain}/api/v1/item/628`;

const product = ({ name, image, size, price, addToCartLink }) => (
  <section>
    <h1>name: {name}</h1>
    <img alt={name} src={image} />
    <br />
    <div>size: {size}</div>
    <div>price: {price}</div>
    <br />
    <a href={addToCartLink}>Add</a>
    <br />
  </section>
);

const Product = () => {
  const [item, setItem] = useState([]);
  const [request, response] = useFetch(url);

  // componentDidMount
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    initializeItem();
  });

  async function initializeItem() {
    const initialItem = await request.get();
    if (response.ok) setItem(initialItem);
  }

  return (
    <>
      domain: {domain}
      {request.error && 'Error!'}
      {request.loading && 'Loading...'}
      {product(item)}
    </>
  );
};

export default Product;
