import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmployeeEntity2 } from "./employee2.entity";




@Module({
imports: [TypeOrmModule.forFeature([EmployeeEntity2])],
controllers: [],
providers: [],

})

export class EmployeeModule2 {}