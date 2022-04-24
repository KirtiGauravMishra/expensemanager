import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './Context/Context';
import { SpeechProvider } from '@speechly/react-client';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';






ReactDOM.render(
    <SpeechProvider appId="f1a8207b-f565-42e7-97b1-2608800667cc" language="en-US">
       
<Provider>

    <BrowserRouter>
<App />
</BrowserRouter>

</Provider>
</SpeechProvider>,

document.getElementById('root')
);


