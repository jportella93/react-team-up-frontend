import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

new Audio('harder.mp3').play()

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
