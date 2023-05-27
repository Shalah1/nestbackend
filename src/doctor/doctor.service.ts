import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoctorForm } from "./doctor.dto";
import { DoctorEntity } from "./doctor.entity";
import { DoctorFormUpdate } from "src/employee/employeeformupdate.dto";



@Injectable()
export class DoctorService {
 
    constructor(
        @InjectRepository(DoctorEntity)
        private doctorRepo: Repository<DoctorEntity>,
      ) {}

      getDoctorIndex():any { 
        return this.doctorRepo.find();
    
    }

   

insertDoctor(mydto):any {
    
   return this.doctorRepo.save(mydto);
      }
      getDoctorsByemployeeID(id):any {
        return this.doctorRepo.find({ 
                where: {id:id},
            relations: {
                employee: true,
            },
         });
    }

//    insertDoctor(mydto:DoctorForm):any {
    
//    return this.doctorRepo.save(mydto);
// }
// getemployeeByDoctorID(id):any {
//   return this.doctorRepo.find({ 
//           where: {id:id},
//       relations: {
//           employee: true,
//       },
//    });

// }
// updateUserbyid(mydto:DoctorForm,id):any {

//      return this.doctorRepo.update(id,mydto);
    
//      }

deleteDoctorbyid(id):any {
    
    return this.doctorRepo.delete(id);
}


    Updatedoctor(mydto):any {
    
        return this.doctorRepo.save(mydto);
           }
           UpdatedoctorByemployeeID(id):any {
             return this.doctorRepo.find({ 
                     where: {id:id},
                 relations: {
                     employee: true,
                 },
              });
         }
}