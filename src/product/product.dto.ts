import { IsNotEmpty} from "class-validator";

export class ProductForm {   
   

   @IsNotEmpty()
    namep: string;

    @IsNotEmpty()
    ProductDescription: number; 


    @IsNotEmpty()
    ProductCategory: string;

   
    @IsNotEmpty()
    ProductPrice: number;

    @IsNotEmpty()
    myfile:string;

    @IsNotEmpty()
    ProductAvailability: string;

    @IsNotEmpty()
    Productreviews: string;
    

    @IsNotEmpty()
    employee:number;

}
