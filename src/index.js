import React from 'react'; //want the react library
import ReactDOM from 'react-dom'; //for DOM manipulation
import App from './app.js'; //what we created with the h1

ReactDOM.render(
    <App />,
    document.getElementById('root') //the root is on the index.html
)

