import { createAction, props } from "@ngrx/store";

export const setUser=createAction(  
    '[User]Set User',
    props<{id:number,name:string,email:string,password:string}>()
)  

export const clearUser = createAction(
    '[User]Clear User'
);


/*
  So if we are creating a counter in that case action would be increment decrement and reset

  why are we passing props and what about the square brackets 
  props in NgRx Actions
The props function is used to define the shape of the payload that the action carries.

You're saying, “When I dispatch the setUser action, it must include an object with the following
 properties: id, name, email, and password.”

This helps enforce type safety in your application and gives you autocompletion and compile-time error checking in TypeScript.

Think of it like declaring the expected data format upfront so your reducer and components know what to expect.

📛 Why [User] Set User Has Square Brackets
It's a convention used in NgRx to help categorize and identify actions, especially when you're debugging.

[User] indicates the source or domain of the action—like it's related to user state or a User module.

Set User is the name of the specific action being performed.

This convention doesn’t affect how the code runs, but it improves clarity in tools like Redux DevTools, logs, and debugging sessions.
*/