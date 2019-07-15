import React from 'react';
import ReactDom from 'react-dom';

const root = document.querySelector('#root');

const Test = () => <h1>Hello World</h1>;

// react component
ReactDom.render(<Test />, root);