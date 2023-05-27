import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { MailerService } from "@nestjs-modules/mailer/dist";
import { EmployeeEntity } from "./employeeentity.entity";
import { EmployeeForm } from "./employeeform.dto";
import { EmployeeFormUpdate } from "./employeeformupdate.dto";
@Injectable()
export class EmployeeService {
 
    constructor(
        @InjectRepository(EmployeeEntity)
        private employeeRepo: Repository<EmployeeEntity>,
        
        private mailerService: MailerService
      
        ) {}

getIndex():any { 
    return this.employeeRepo.find();

}
getUserByID(id):any {
    return this.employeeRepo.findOneBy({ id });
}

getUserByIDName(qry):any {
    return this.employeeRepo.findOneBy({ id:qry.id,name:qry.name });
}

insertUser(mydto:EmployeeForm):any {
    const employeeaccount = new EmployeeEntity()
    employeeaccount.name = mydto.name;
    employeeaccount.email = mydto.email;
    employeeaccount.password = mydto.password;
    employeeaccount.address = mydto.address;
    // employeeaccount.age= mydto.age;
    // employeeaccount.seniorrank= mydto.seniorrank;
    // employeeaccount.phonenumber= mydto.phonenumber;

   return this.employeeRepo.save(employeeaccount);
    //    return this.employeeRepo.save(mydto);
      }

updateUser(name,email):any {
   
    return this.employeeRepo.update({email:email},{name:name});
    }
updateUserbyid(mydto:EmployeeFormUpdate,id):any {
    return this.employeeRepo.update(id,mydto);
       }
    deleteUserbyid(id):any {
    
        return this.employeeRepo.delete(id);
    }

    getCampaignsByemployeeID(id):any {
        return this.employeeRepo.find({ 
                where: {id:id},
            relations: {
                doctors: true,
            },
         });
    }

    getEmployeeByCampaignID(id):any {
        return this.employeeRepo.find({ 
                where: {id:id},
            relations: {
                doctors: true,
            },
         });
    }

    getEmployeeByProductID(id):any {
        return this.employeeRepo.find({ 
                where: {id:id},
            relations: {
                products: true,
            },
         });
    }
    getProductsByemployeeID(id):any {
        return this.employeeRepo.find({ 
                where: {id:id},
            relations: {
                products: true,
            },
         });
    }
    getDoctorsByemployeeID(id):any {
        return this.employeeRepo.find({ 
                where: {id:id},
            relations: {
                doctors: true,
            },
         });
    }
    getEmployeeByDoctorID(id):any {
        return this.employeeRepo.find({ 
                where: {id:id},
            relations: {
                doctors: true,
            },
         });
    }
    getEmployee2sByemployeeID(id):any {
        return this.employeeRepo.find({ 
                where: {id:id},
            relations: {
                employee2s: true,
            },
         });
    }

    getEmployeeByEmployee2sID(id):any {
        return this.employeeRepo.find({ 
                where: {id:id},
            relations: {
                employee2s: true,
            },
         });

        }
    getHistory(id:number){
        return this.employeeRepo.find({where: {id:id},
        relations:{
        history:true,
        },  
        })
        }
        
    
async signup(mydto) {
const salt = await bcrypt.genSalt();
const hassedpassed = await bcrypt.hash(mydto.password, salt);
mydto.password= hassedpassed;
return this.employeeRepo.save(mydto);
}

async signin(mydto):Promise<any>{
    console.log(mydto.password);
const mydata= await this.employeeRepo.findOneBy({email: mydto.email});
const isMatch= await bcrypt.compare(mydto.password, mydata.password);
if(isMatch) {
return 1;
}
else {
    return 0;
}

}

async sendEmail(mydata){
 return   await this.mailerService.sendMail({
        to: mydata.email,
        subject: mydata.subject,
        text: mydata.text, 
      });

}



}
