import { conf } from '../conf/url';

export const getImageUrlCropped = (image, width, ratio = 1.3333) => `${conf.responsiveImageService}/${image}?twic=v1/cover=${width}x${width * ratio}/quality=100`;
export const getImageUrl = (image, width) => `${conf.responsiveImageService}/${image}?twic=v1/resize=${width}/quality=100`;
