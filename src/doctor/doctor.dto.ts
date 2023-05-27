import { IsNotEmpty, IsInt, Length, IsEmail } from "class-validator";

export class DoctorForm {   
   

   @IsNotEmpty()
    nameD: string;

   @IsEmail() 
    email: string;

   @Length(3,8)
    password: string;

    @IsNotEmpty()
    speaciality: string;

    @IsNotEmpty()
    address: string;
    
  

    @IsNotEmpty()
    employee:number;

     //filename:string;


}
