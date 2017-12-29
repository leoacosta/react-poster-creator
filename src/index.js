import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CardPicker from './components/CardPicker';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<CardPicker />, document.getElementById('root'));