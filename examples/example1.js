//import lazyload from '../source/lazyload';

lazyload.add('#section-sides > div:nth-child(odd)', window.innerHeight/4, 'left');
lazyload.add('#section-sides > div:nth-child(even)', window.innerHeight/4, 'right');
lazyload.add('#section-bottom > div', window.innerHeight/4);  // default direction is 'bottom'