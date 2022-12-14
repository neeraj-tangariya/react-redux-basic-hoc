import {
    Action,
    configureStore,
    ThunkAction
} from '@reduxjs/toolkit'
import { RootState } from './modules/types.d';
import { cartData } from './modules/cartData/slice';

export const store = configureStore({
    reducer: {
        cartData
    }
})

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>>