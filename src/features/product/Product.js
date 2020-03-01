import React, { useState, useRef, useEffect } from 'react';
import useFetch from 'use-http';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

const product = ({ id, title, body }) => (
  <section>
    <h1>
      name: {id} - {title}
    </h1>
    <img
      alt="vaso cactus"
      src="http://pungilandia.com/Promozioni/img/vaso10_1.jpg"
    />
    <div>size: {body}</div>
    <div>price</div>
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
    const initialItem= await request.get();
    if (response.ok) setItem(initialItem);
  }

  return (
    <>
      {request.error && 'Error!'}
      {request.loading && 'Loading...'}
      {product(item)}
    </>
  );
}

export default Product;
