export interface UserState{
    id?:number ;
    name?:string;
    email?:string;
    password?:string;
}  

export const initialUserstate:UserState ={
    id: 0,
    name: "",
    email: "",
    password: ""
}