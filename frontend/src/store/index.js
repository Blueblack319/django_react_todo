import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const persistConfig = {
  key: 'root',
  storage,
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

export default () => {
  const store = createStore(
    enhancedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  const persistor = persistStore(store);
  return { persistor, store };
};
