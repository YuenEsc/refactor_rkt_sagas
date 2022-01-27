import { all } from "redux-saga/effects";
import Pokemon from "./pokemon";

export default function* rootSaga() {
  yield all([Pokemon()]);
}
