// for each api call we are mantaining an action constant
export const actions = {
  GET: {
    POKEMON_LIST: "POKEMON_LIST",
    POKEMON_INFO: "POKEMON_INFO",
  },
};
// for each api call we are maintaining an action constructor as well
export const getPokemonList = (body, onSuccess) => ({
  type: actions.GET.POKEMON_LIST,
  payload: { body, onSuccess },
});

export const getPokemonInfo = (url, body, onSuccess) => ({
  type: actions.GET.POKEMON_INFO,
  payload: { url, body, onSuccess },
});
