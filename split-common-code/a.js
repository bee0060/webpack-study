// import react from 'react';
import { add } from './base';
 import { renderPage } from './common';

const hello = renderPage();
const pageContent = hello + ' page A!';
const domNum = add(1,2);

export {
    pageContent,
    domNum
}