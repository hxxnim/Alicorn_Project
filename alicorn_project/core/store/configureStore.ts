import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../redux/rootReducer';

// export const store = createStore(rootReducer, composeWithDevTools());

// export type ReducerType = ReturnType<typeof rootReducer>;
// export default store 

const configureStore = () => {
    // const enhancer = process.env.NODE_ENV === 'production'
    //   ? compose()
    //   : composeWithDevTools(
    //   );
    const store = createStore(rootReducer, composeWithDevTools());
    return store;
  };

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });

export default wrapper;