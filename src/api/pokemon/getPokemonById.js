import parseRawPokemon from "../../utils/parseRawPokemon";
/**
 * getPokemonById is a centralized way to define API endpoints
 */
const getPokemonById = (builder) =>
  builder.query({
    // takes parameters as input and then use them to make the request
    query: (url) => ({ url }),
    // transform response in place before sending it
    transformResponse: (data) => parseRawPokemon(data),
  });

export default getPokemonById;
