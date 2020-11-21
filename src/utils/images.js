import { conf } from '../conf/url';

export const getImageUrlCropped = (image, width, ratio = 1.33333333) =>
  `${conf.responsiveImageService}/${image}?twic=v1/cover=${width}x${
    Math.round(width * ratio)
  }/quality=100`;
export const getImageUrl = (image, width) => `${conf.responsiveImageService}/${image}?twic=v1/resize=${width}/quality=100`;
