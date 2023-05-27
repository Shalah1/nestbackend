import { IsNotEmpty, IsInt, Length, IsEmail } from "class-validator";

export class EmployeeForm {   
   

   @IsNotEmpty()
    name: string;
   
   @IsEmail() 
    email: string;
    
    @IsNotEmpty()
    gender: string;

    
    @IsNotEmpty()
    phonenumber: string;

    
    @IsNotEmpty()
    age: number;

    @Length(3,18)
    password: string;

    @IsNotEmpty()
    address: string;


    filename:string;

}



//  export class employeeform2 {

//     @IsNotEmpty()
//     name: string;
   
//    @IsEmail() 
//     email: string;

//     @Length(3,18)
//     password: string;

//     @IsNotEmpty()
//     address: string;

//     @Length(20-55)
//     age: number;

//     @IsNotEmpty()
//      rank: string;
     
//      @IsNotEmpty()
//      campaign: string;

//      @Length(3-12)
//      phonenumber: number;

//      @Length(5-10)
//      salary: number;

//      @Length(5)
//      doctorrating: string;

//      @IsNotEmpty()
//      question: string;

//      @IsNotEmpty()
//      answer: string;
//   //filename:string;

//  }
 export class EmployeeHistoryDTO{
    des:string;
    employeeId:number;

}