import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './Context/Context';
import { SpeechProvider } from '@speechly/react-client';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="f1a8207b-f565-42e7-97b1-2608800667cc" language="en-US">
<Provider>
<App />
</Provider>
</SpeechProvider>,

document.getElementById('root')
);


