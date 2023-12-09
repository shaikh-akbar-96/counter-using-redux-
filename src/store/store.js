import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./reducers/counterReducer";
export const store = configureStore({ reducer: CounterReducer });
