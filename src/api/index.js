import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getPokemonById from "./pokemon/getPokemonById";
import getPokemonList from "./pokemon/getPokemonList";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    //each function should be added to the endpoints option
    getPokemonList: getPokemonList(builder),
    getPokemonById: getPokemonById(builder),
  }),
});

// each automated build hook should be deconstructed in order to be used 
export const { useGetPokemonListQuery, useLazyGetPokemonByIdQuery, useGetPokemonByIdQuery } = api;
