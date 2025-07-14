import { createReducer, on } from "@ngrx/store";
import { clearUser, setUser } from "./user.action";
import { initialUserstate } from "./user.state";

export const userReducer = createReducer(
    initialUserstate,
    on(setUser, (state, { id, email, name, password }) => {
    console.log('setUser triggered:', { id, email, name,password });
    return { id, email, name, password };
  }),
    on(clearUser, ()=>initialUserstate)
)