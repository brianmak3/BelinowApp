import { createStore, applyMiddleware } from 'redux'
import reducer from '../redux/reducers'
import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'remote-redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore() {
    //let store = createStore(reducer, applyMiddleware(thunk))
    //const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
    const store = createStore(reducer, /* preloadedState, */ composeWithDevTools(
        applyMiddleware(thunk),
        // other store enhancers if any
    ));

    return store
}