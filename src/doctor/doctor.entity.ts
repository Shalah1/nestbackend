import { EmployeeEntity } from 'src/employee/employeeentity.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity("doctor")
export class DoctorEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameD: string;

  @Column()
  email: string;

  @Column()
  password: string;
  
   @Column()
  speaciality: string;

  @Column()
  address: string;

  @ManyToOne(() => EmployeeEntity, (employee) => employee.doctors)
    employee: EmployeeEntity

}