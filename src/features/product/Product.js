import React from 'react';
import useFetch from 'use-http';

// const url = window.location.href + 'item/628';
const url = 'http://jsonplaceholder.typicode.com/posts/1';

const product = ({ id, title, body }) => (
  <section>
    <h1>
      name: {id} - {title}
    </h1>
    <img alt="vaso cactus" src="http://pungilandia.com/Promozioni/img/vaso10_1.jpg" />
    <div>size: {body}</div>
    <div>price</div>
  </section>
);

export function Product() {
  const options = {
    // accepts all `fetch` options
    data: [], // default for `data` will be an array instead of undefined
  };

  const { loading, error, data } = useFetch(url, options, []); // onMount (GET by default)

  return (
    <>
      {error && 'Error!'}
      {loading && 'Loading...'}
      {product(data)}
    </>
  );
}
