import React from 'react';
import { getImageUrl } from '../../../utils/images';

const PictureTagProduct = ({ className, alt, image }) => (
  <picture className={className} alt={image}>
    {/* <!-- Landscape tablet / computers --> */}
    <source
      media="(min-width: 1024px)"
      sizes="(min-width: 1600px) 33vw,
      (min-width: 1024px) 45vw,
      (min-width: 768px) 55vw, 100vw"
      srcSet={`${getImageUrl(image, 400)} 500w,
            ${getImageUrl(image, 600)} 600w,
            ${getImageUrl(image, 800)} 800w
            ${getImageUrl(image, 800)} 1000w
            ${getImageUrl(image, 800)} 1200w
            ${getImageUrl(image, 800)} 1600w`}
    />
    {/* <!-- Portrait tablet / landscape smartphone --> */}
    <source
      media="(min-width: 768px)"
      srcSet={`${getImageUrl(image, 1000)} 2x`}
    />
    {/* <!-- Larger smartphone(s) --> */}
    <source
      media="(min-width: 414px)"
      srcSet={`${getImageUrl(image, 900)} 2x`}
    />
    {/* <!-- Smallest smartphone --> */}
    <img
      src={`getImageUrl(image, 400)`}
      srcSet={`${getImageUrl(image, 800)} 2x`}
      alt={alt}
      loading="lazy"
    />
  </picture>
);

export default PictureTagProduct;
