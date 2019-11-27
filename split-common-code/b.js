// import react from 'react';
import { add } from './base';
import { renderPage } from './common';

const hello = renderPage();
const pageContent = hello + ' page B!';
const specObj = {
    name: 'page b'
}
const domNum = add(2,3);

export {
   pageContent,
   specObj,
   domNum
}