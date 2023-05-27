import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeFormUpdate2 } from "src/employee/employeeformupdate.dto";
import { Repository } from 'typeorm';
import { EmployeeForm2 } from "./employee2.dto";
import { EmployeeEntity2 } from "./employee2.entity";

@Injectable()
export class EmployeeService2 {

 
    constructor(
        @InjectRepository(EmployeeEntity2)
        private employeeRepo2: Repository<EmployeeEntity2>,
        ) {}

getIndex2():any { 
    return this.employeeRepo2.find();

}
getUser2ByID(id):any {
    return this.employeeRepo2.findOneBy({ id });
}

insertUser2(mydto:EmployeeForm2):any {
    const employeeaccount = new EmployeeEntity2()
    employeeaccount.name = mydto.name;
    employeeaccount.email = mydto.email;
    employeeaccount.password = mydto.password;
    employeeaccount.address = mydto.address;
    employeeaccount.age= mydto.age;
    employeeaccount.juniorrank= mydto.juniorrank;
    employeeaccount.phonenumber= mydto.phonenumber;
    employeeaccount.salary= mydto.salary;
    employeeaccount.doctorrating= mydto.doctorrating;

   return this.employeeRepo2.save(employeeaccount);
    //    return this.employeeRepo.save(mydto);
      }

getUser2ByIDName(qry):any {
    return this.employeeRepo2.findOneBy({ id:qry.id,name:qry.name });
}


updateUser2(name,email):any {
   
  return this.employeeRepo2.update({email:email},{name:name});
  }

  updateUser2byid(mydto:EmployeeFormUpdate2,id):any {
    return this.employeeRepo2.update(id,mydto);
       }

 deleteUser2byid(id):any {
    
        return this.employeeRepo2.delete(id);
    }

insertEmployee2(mydto):any {
    
    return this.employeeRepo2.save(mydto);
       }
       getEmployee2sByemployeeID(id):any {
         return this.employeeRepo2.find({ 
                 where: {id:id},
             relations: {
                 employee: true,
             },
          });
       }



updateemployee2(mydto):any {
    
    return this.employeeRepo2.save(mydto);
       }
       Updateemployee2ByemployeeID(id):any {
         return this.employeeRepo2.find({ 
                 where: {id:id},
             relations: {
                 employee: true,
             },
          });
     }




updateemployee2byid(mydto):any {
    return this.employeeRepo2.save(mydto);
           }
           Updateemployees2ByemployeeID(id):any {
            return this.employeeRepo2.find({ 
                    where: {id:id},
                relations: {
                    employee: true,
                },
             });
        }
   
}