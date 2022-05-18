import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { cartReducer } from './cart/cart.slice';
import { productApi } from './product/product.api';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		[productApi.reducerPath]: productApi.reducer, // указываем название редюсаера и сам редюсер
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware), // миддлвейр встроенный в ртк, позволяет делать кэширования и разные интересные штуки, тут он не нужен, но нужен на крупных проектах
});

// рефетч данных при уходе/возврате на вкладку
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)

export type TypeRootState = ReturnType<typeof store.getState>;
