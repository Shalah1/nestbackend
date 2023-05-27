import { IsNotEmpty, IsInt, Length, IsEmail } from "class-validator";
 export class EmployeeForm2 {

    @IsNotEmpty()
    name: string;
   
   @IsEmail() 
    email: string;

    @Length(3,18)
    password: string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    age: number;

    @IsNotEmpty()
     juniorrank: string;

     @IsNotEmpty()
     phonenumber: number;

     @IsNotEmpty()
     salary: number;

     @Length(1,5)
     doctorrating: string;

     @IsNotEmpty()
     employee:number;

  //filename:string;

 }