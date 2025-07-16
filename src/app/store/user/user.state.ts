export interface UserState{
    id:number ;
    name:string;
    email:string;
    password:string;
}  
//I is imp to create the initialUserDtate as reducer will take this as intial state and also as a parameter
export const initialUserstate:UserState ={
    id: 0,
    name: "",
    email: "",
    password: ""
}