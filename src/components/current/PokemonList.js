import {
  Grid,
  ImageList,
  ImageListItem,
  ListSubheader,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonList } from "../../middleware/actions/pokemon";
import PokemonTile from "./PokemonTile";

const PokemonList = () => {
  const dispatch = useDispatch();
  // right now the localState is being use to store everything that comes from the endpoints 
  // the component is in charge of the lifecycle of the data, that includes parsing, caching
  const [localState, setLocalState] = useState({ pokemonList: undefined });
  //the code is verbose
  useEffect(() => {
    if (!localState?.pokemonList) {
      dispatch(
        getPokemonList({}, (data) => {
          setLocalState({
            pokemonList: data.results,
          });
        })
      );
    }
  }, []);

  const { pokemonList } = localState;
  return (
    <>
      <Grid container spacing={2}>
        {Array.isArray(pokemonList) &&
          pokemonList.map((pokemon) => <PokemonTile pokemon={pokemon} />)}
      </Grid>
    </>
  );
};

export default PokemonList;
