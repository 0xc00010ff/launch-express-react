import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './pages';

// Render react to the html root element
ReactDOM.render(<Pages />, document.getElementById('root'));

// allow hot reloading in dev
module.hot.accept();
