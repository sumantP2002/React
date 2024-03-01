import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const anotherUser = "sumant";
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotherUser
)

//react create a dom of itselt having a methoud createroot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    reactElement
    
);



