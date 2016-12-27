import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import CaptchaApp from './components/captcha.jsx';


let count = (state={i:0}, action)=>{

    switch(action.type)
    {
        case 'add':
            return {i:state.i+1};
        case 'sub':
            return {i:state.i-1};
        default:
            return state;
    }

};
var store = createStore(count);

ReactDOM.render(
    <Provider store={store}>
        <CaptchaApp/>
    </Provider>
,
    document.getElementById('content')
);