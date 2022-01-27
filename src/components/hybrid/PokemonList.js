import { Grid } from "@material-ui/core";
import React from "react";
import { useGetPokemonListQuery } from "../../api";
import PokemonTile from "./PokemonTile";

const PokemonList = () => {
  const { data, isSuccess } = useGetPokemonListQuery();
  return (
    <>
      <Grid container spacing={2}>
        {Array.isArray(data) &&
          isSuccess &&
          data?.map((pokemon) => <PokemonTile pokemon={pokemon} />)}
      </Grid>
    </>
  );
};

export default PokemonList;
