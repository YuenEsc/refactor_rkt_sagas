import axios from "axios";
import { takeEvery, all, call } from "redux-saga/effects";
import { actions } from "../actions/pokemon";
// in order to make an api call we need to create an api endpoint 
// with the current implementation for every endpoint
export const getPokemonList = async ({ body }) =>
  axios.get("https://pokeapi.co/api/v2/pokemon");

export const getPokemonInfo = async ({ body, url }) => axios.get(url);
//also we need to set a saga listener to handle every endpoint
export function* getPokemonListSaga({ payload }) {
  const { body, onSuccess } = payload;
  try {
    const { data } = yield call(getPokemonList, { body });
    if (typeof onSuccess === "function") {
      onSuccess(data);
    }
  } catch {
    onSuccess(false);
  }
}

export function* getPokemonInfoSaga({ payload }) {
  const { body, url, onSuccess } = payload;
  try {
    const { data } = yield call(getPokemonInfo, { url, body });
    if (typeof onSuccess === "function") {
      onSuccess(data);
    }
  } catch {
    onSuccess(false);
  }
}
//and also the saga listener should be added here as well
export default function* Pokemon() {
  yield all([
    takeEvery(actions.GET.POKEMON_LIST, getPokemonListSaga),
    takeEvery(actions.GET.POKEMON_INFO, getPokemonInfoSaga),
  ]);
}
