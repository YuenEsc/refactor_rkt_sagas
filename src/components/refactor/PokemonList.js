import { Grid } from "@material-ui/core";
import React from "react";
import { useGetPokemonListQuery } from "../../api";
import PokemonTile from "./PokemonTile";

const PokemonList = () => {
  // note here how the data is shorter and reactive 
  const { 
    data,// The latest returned result regardless of hook arg, if present
    isSuccess // Query has data from a successful load.
    // https://redux-toolkit.js.org/rtk-query/api/created-api/hooks#signature
  } = useGetPokemonListQuery();
  return (
    <>
      <Grid container spacing={2}>
        {Array.isArray(data) &&
          isSuccess &&
          data.map((pokemon) => <PokemonTile pokemon={pokemon} />)}
      </Grid>
    </>
  );
};

export default PokemonList;
