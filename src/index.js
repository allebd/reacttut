import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const root = document.querySelector('#root');

// react component, root
ReactDom.render(<App />, root);

module.hot.accept();
