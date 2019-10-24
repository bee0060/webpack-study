import React, { Component } from 'react';
import { render } from 'react-dom';
import './styles.less';

class Button extends Component {
  render() {
      console.log('in button render')
    return <h1>Hello,Webpack</h1>
  }
}

render(<Button/>, document.getElementById('app'));
