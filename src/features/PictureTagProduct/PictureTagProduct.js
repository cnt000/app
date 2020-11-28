import React from 'react';
import { getImageUrlCropped } from '../../utils/images';

const PictureTagProduct = ({ className, alt, image }) => (
  <picture className={className} alt={image}>
    {/* <!-- Landscape tablet / computers --> */}
    <source
      media="(min-width: 1024px)"
      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
      srcset={`${getImageUrlCropped(image, 200)} 200w,
            ${getImageUrlCropped(image, 400)} 400w,
            ${getImageUrlCropped(image, 600)} 600w,
            ${getImageUrlCropped(image, 800)} 800w`}
    />
    {/* <!-- Portrait tablet / landscape smartphone --> */}
    <source
      media="(min-width: 768px)"
      srcset={`${getImageUrlCropped(image, 500)} 2x`}
    />
    {/* <!-- Larger smartphone(s) --> */}
    <source
      media="(min-width: 414px)"
      srcset={`${getImageUrlCropped(image, 500)} 2x`}
    />
    {/* <!-- Smallest smartphone --> */}
    <img
      src="{getImageUrlCropped(image, 200)}"
      srcset={`${getImageUrlCropped(image, 400)} 2x`}
      alt={alt}
      loading="lazy"
    />
  </picture>
);

export default PictureTagProduct;
