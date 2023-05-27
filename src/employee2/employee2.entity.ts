import { EmployeeEntity } from 'src/employee/employeeentity.entity';
import { Entity, Column, PrimaryGeneratedColumn,ManyToOne } from 'typeorm';

@Entity("employee2")
export class EmployeeEntity2{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  juniorrank: string;
  
  @Column({ nullable: true })
  phonenumber: number;
  
  @Column({ nullable: true })
  salary: number;
  
  @Column({ nullable: true })
  doctorrating: string;

  @ManyToOne(() => EmployeeEntity, (employee) => employee.employee2s)
    employee: EmployeeEntity

}