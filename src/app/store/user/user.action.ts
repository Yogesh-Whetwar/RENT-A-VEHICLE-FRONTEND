import { createAction, props } from "@ngrx/store";

export const setUser=createAction(  
    '[User]Set User',
    props<{id:number,name:string,email:string,password:string}>()
)  

export const clearUser = createAction(
    '[User]Clear User'
);