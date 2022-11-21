import { configureStore } from '@reduxjs/toolkit';
import { shopsSliceReducer } from './shopsSlice';
import { orderSliceReducer } from './orderSlice';
import authSliceReducer from './auth/authSlice'
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token', 'name', 'email', 'phone'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authSliceReducer),
        shops: shopsSliceReducer,
        order: orderSliceReducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(
        {
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }
    ),]
});

export const persistor = persistStore(store);
