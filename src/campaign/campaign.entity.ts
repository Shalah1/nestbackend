
import { EmployeeEntity } from 'src/employee/employeeentity.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity("campaign")
export class CampaignEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameC: string;
 
  @Column({
    type: 'timestamp', // specify the data type for the column
  })
  date: Date;
  
  
   @Column()
  speaciality: string;

  @Column()
  importance: string;
  
  @Column()
   myfile: string;

  @ManyToOne(() => EmployeeEntity, (employee) => employee.campaigns)
    employee: EmployeeEntity

}