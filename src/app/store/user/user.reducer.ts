import { createReducer, on } from "@ngrx/store";
import { clearUser, setUser } from "./user.action";
import { initialUserstate } from "./user.state";

export const userReducer = createReducer(
    initialUserstate,
    on(setUser, (state, { id, name, email, password ,role}) => {
    console.log('setUser reducer called with:', { id, name, email, password,role });
    return { id, name, email, password ,role};
  }),

  on(clearUser, () => {
    console.log('clearUser reducer called');
    return initialUserstate;
  })
)

/*
It performs some logic based on what actions it got
exam :
action -> increment -> in reducer we do -> prev=prev+1

NOW REDUCER will send this data to store  so that store remains updated  

Reducer is taking the initialState of the user then setting the user with setUser action and if clearUser
user action is called then it will reset the state to initialUserstate
This is how we manage the state of the user in our application using NgRx.
*/