import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ObjectID, Repository } from 'typeorm';
import { ProductEntity } from "./product.entity";
import { ProductForm } from "./product.dto";
import { ProductFormUpdate } from "src/employee/employeeformupdate.dto";



@Injectable()
export class ProductService {


    constructor(
        @InjectRepository(ProductEntity)
        private ProductRepo: Repository<ProductEntity>,
      ) {}

      getProductIndex():any { 
        return this.ProductRepo.find();
    
    }

insertProduct(mydto):any {
    
   return this.ProductRepo.save(mydto);
      }
      getProductsByemployeeID(id):any {
        return this.ProductRepo.find({ 
                where: {id:id},
            relations: {
                employee: true,
            },
         });
    }

    // FindProduct(mydto):any {
    
    //     return this.ProductRepo.save(mydto);
    //        }
    //        getEmployeeByEmployee2sID(id):any {
    //          return this.ProductRepo.find({ 
    //                  where: {id:id},
    //              relations: {
    //                  employee: true,
    //              },
    //           });
    //      }

deleteProductbyid(id: string | number | FindOptionsWhere<ProductEntity> | Date | ObjectID | string[] | number[] | Date[] | ObjectID[]):any {
    
    return this.ProductRepo.delete(id);
}

UpdateProduct(mydto):any {
    
        return this.ProductRepo.save(mydto);
           }
           UpdateProductByemployeeID(id):any {
             return this.ProductRepo.find({ 
                     where: {id:id},
                 relations: {
                     employee: true,
                 },
              });
         }
}