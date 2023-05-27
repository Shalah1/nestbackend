import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmployeeController } from "./employee.controller"
import { EmployeeService } from "./employeeservice.service"
import { DoctorService } from "src/doctor/doctor.service";
import { DoctorEntity } from "src/doctor/doctor.entity";
import { MailerModule } from "@nestjs-modules/mailer";
import { EmployeeEntity } from "./employeeentity.entity";
 import { EmployeeHistory } from "./history.entity";
import { EmployeeEntity2 } from "src/employee2/employee2.entity";
import { EmployeeService2 } from "src/employee2/employeeservice2.service";
import { CampaignEntity } from "src/campaign/campaign.entity";
import { CampaignService } from "src/campaign/campaign.service";
import { ProductEntity } from "src/product/product.entity";
import { ProductService } from "src/product/product.service";



@Module({
imports: [
    MailerModule.forRoot({
        transport: {
          host: 'smtp.gmail.com',
                   port: 465,
                  // ignoreTLS: true,
                   secure: true,
                   auth: {
                       user: 'mashalah18@gmail.com',
                       pass: 'atbmgmanyyqhnfuf'
                   },
                   tls: {
                    rejectUnauthorized: false,
                 
                  }
}}),
      
    TypeOrmModule.forFeature([EmployeeEntity,EmployeeEntity2,
         EmployeeHistory,DoctorEntity,CampaignEntity,ProductEntity])],
controllers: [EmployeeController],
providers: [EmployeeService,EmployeeService2,DoctorService,CampaignService,ProductService],

})

export class EmployeeModule {}
