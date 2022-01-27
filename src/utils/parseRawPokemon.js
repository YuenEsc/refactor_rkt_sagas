import { capitalize } from "@material-ui/core";
import getPokemonColor from "./getPokemonColor";

const parseRawPokemon = (rawPokemon) => {
  const name = capitalize(rawPokemon.name);
  const types = rawPokemon.types.map(
    (typeItem) => `${typeItem.type.name.toUpperCase()}`
  );
  const color = getPokemonColor(types[0]);
  const imageURL = rawPokemon.sprites.front_default;
  return {
    id: rawPokemon.id,
    name,
    color,
    types,
    imageURL,
  };
};

export default parseRawPokemon;
