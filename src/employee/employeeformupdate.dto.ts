import { IsNotEmpty, IsInt, Length } from "class-validator";

export class EmployeeFormUpdate {   
   
   @Length(3,8)
    name: string;


}

export class EmployeeFormUpdate2 {   
   
    @Length(3,8)
     name: string;
 
 
 
 }
 export class CampaignFormUpdate{   
   
    @Length(3,8)
     nameC: string;
 
 
 
 }

 export class ProductFormUpdate{   
   
    @Length(3,8)
     Namep: string;
 
 
 
 }
 export class DoctorFormUpdate{   
   
    @Length(3,8)
     NameD: string;
 
 
 
 }
