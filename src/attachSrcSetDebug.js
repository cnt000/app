const printSrcSetDebug = (elm, showFn) =>
  showFn(`
src: ${elm.src},
currentSrc: ${elm.currentSrc},
width: ${getComputedStyle(elm).width}
height: ${getComputedStyle(elm).height}
parent width: ${getComputedStyle(elm.parentNode).width},
parent height: ${getComputedStyle(elm.parentNode).height},
devicePixelRatio: ${window.devicePixelRatio}
`);

const printInDom = (elm) => (str) => {
  var span = document.createElement('span');
  span.className = 'debug';
  span.style.cssText = `position: absolute;
    top: 0;
    left: 0;
    color: #000;
    text-align: left;
    font-size: 1rem;
    width: 100%;
    background-color: #ffffff80;`;
  span.innerText = str;
  elm.parentNode.insertBefore(span, null);
  console.log(str);
};

console.log(document.querySelectorAll('article img').length);

const debug = (selector) => {
  document.querySelectorAll('.debug').forEach((e) => e.remove());
  document
    .querySelectorAll(selector)
    .forEach((a) => printSrcSetDebug(a, printInDom(a)));
};

export const attachSrcSetDebug = (imagesSelector) => {
  debug(imagesSelector);
  window.addEventListener('resize', () => debug(imagesSelector));
};
// attachSrcSetDebug('article img');
