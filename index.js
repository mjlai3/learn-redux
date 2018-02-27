'use strict';

import reducer from './reducer';
import { createStore } from 'redux';

const store = createStore(reducer);

const render = () => {
	document.body.innerText = store.getState();
}

render();

store.subscribe(render);

document.addEventListener('click', () => {
	store.dispatch({ type: 'INCREMENT' });
});