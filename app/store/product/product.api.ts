import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProduct } from './product.types';

export const productApi = createApi({
	reducerPath: 'api/products', // название редюсера, под которым он будет храниться в нашем store
	baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
	endpoints: build => ({
		getProducts: build.query<IProduct[], number>({
			// из названия эндпоинта нам потом вернется автоматически сгенеренный хук который вернет объект с данными в удобном формате
			query: (limit = 5) => `products?limit=${limit}`,
		}),
	}),
});

export const { useGetProductsQuery } = productApi;
