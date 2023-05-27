import { IsNotEmpty, IsInt, Length, IsEmail, IsDate } from "class-validator";

export class CampaignForm {   
   

   @IsNotEmpty()
    nameC: string;

    @IsDate()
    date: Date; 

    @IsNotEmpty()
    speaciality: string;

    @IsNotEmpty()
    importance: string;

    @IsNotEmpty()
    myfile:string;

    @IsNotEmpty()
    employee:number;


}
