// services/LoginServices.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const LoginServices = createApi({
  reducerPath: 'LoginServices',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://66445f076c6a6565870a1997.mockapi.io/studentInformation/api/v1/' }),
  endpoints: (builder) => ({
    getAllLoginValue: builder.query({
      query: () => '/UserLogin',
    }),
    getAllRegValue: builder.query({
        query: ()=>'/Registration'
    }),
    getLoginValueById: builder.query({
      query: (id) => `/UserLogin/${id}`,
    }),
    getRegValueById: builder.query({
      query:(id)=> `/Registration/${id}`,
    }),
    createRegValue: builder.mutation({  //New Login Account RTQ Query
      query:(newLogin)=>({
        url:'/UserLogin',
        method:'POST',
        body:newLogin,
      }),
    }),
    createLoginValue: builder.mutation({  //New Registration and Admission Create RTQ Query
      query: (newLogin) => ({
        url: '/Registration',
        method: 'POST',
        body: newLogin,
      }),
    }),
    updateRegValue: builder.mutation({
      query: ({ id, ...updatedLogin }) => ({
        url: `/Registration/${id}`,
        method: 'PUT',
        body: updatedLogin,
      }),
    }),
    updateLoginValue: builder.mutation({
      query: ({ id, ...updatedLogin }) => ({
        url: `/UserLogin/${id}`,
        method: 'PUT',
        body: updatedLogin,
      }),
    }),
    deleteLoginValue: builder.mutation({
      query: (id) => ({
        url: `/UserLogin/${id}`,
        method: 'DELETE',
      }),  
    }),
    deleteRegValue: builder.mutation({
      query: (id) => ({
        url: `/Registration/${id}`,
        method: 'DELETE',
    }),
  }),
  }),
});

export const {
  useGetAllLoginValueQuery,
  useGetAllRegValueQuery,
  useCreateRegValueMutation,
  useGetLoginValueByIdQuery,
  useGetRegValueByIdQuery,
  useCreateLoginValueMutation,
  useUpdateLoginValueMutation,
  useDeleteRegValueMutation,
  useUpdateRegValueMutation,
  useDeleteLoginValueMutation,
} = LoginServices;
