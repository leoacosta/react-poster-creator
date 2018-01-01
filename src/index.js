import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import CardPicker from './components/CardPicker';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';


const Root = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={CardPicker} />
                <Route path="/card/:cardId" component={App} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();