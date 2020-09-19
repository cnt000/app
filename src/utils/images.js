import { conf } from '../conf/url';

export const getImageUrl = (image, width) => `${conf.responsiveImageService}/${image}?twic=v1/resize=${width}`
