
import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
//@ts-ignore
import { CookieStorage } from 'redux-persist-cookie-storage';
import Cookies from 'cookies-js';
import auth from '../store/auth/reducer';
import game from '../store/game/reducer';
import rootSagas from './saga';

const persistConfig = {
    key: 'auth',
    storage: new CookieStorage(Cookies),
    whitelist: ['session', 'team'],
}

export const rootReducer = combineReducers({
    auth: persistReducer(persistConfig, auth),
    game,
})


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
rootSagas.map((saga: any) => sagaMiddleware.run(saga, store.dispatch))
export const persistor = persistStore(store)
export default store
