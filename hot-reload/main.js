import './styles.less';
import { subVar1, subVar2 } from './sub';
import { third1, third2 } from './third';

if (process.env.NODE_ENV !== 'production') {
    require('./template.html');
}

const add = (x, y) => x + y;
const substraction = (x, y) => x - y;
const a = 55566;

if (module.hot) {
    console.log('HMR running, it is very hot now!');
    module.hot.accept();
}
console.log('we got from sub:', subVar1, subVar2);
console.log('we got from third:', third1, third2);

export {
    add,
    substraction
};
