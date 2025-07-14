export interface UserState{
    id?:number ;
    name?:string;
    email?:string;
    
}  

export const initialUserstate:UserState ={
    id: 0,
    name: "",
    email: "",
   
}