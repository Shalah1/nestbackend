
import { DoctorEntity } from 'src/doctor/doctor.entity';
import { EmployeeEntity2 } from 'src/employee2/employee2.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { EmployeeHistory } from './history.entity';
import { CampaignEntity } from 'src/campaign/campaign.entity';
import { ProductEntity } from 'src/product/product.entity';

@Entity("employee")
export class EmployeeEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phonenumber: string;

  @Column({ nullable: true })
  age: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  password: string;


  @Column({ nullable: true })
  address: string;

   @Column({ nullable: true })
   filename: string;

  //junior
  @OneToMany(() => EmployeeEntity2, (employee2s) => employee2s.employee)
  employee2s: EmployeeEntity2[]
  // doctor
  @OneToMany(() => DoctorEntity, (doctor) => doctor.employee)
  doctors: DoctorEntity[]
  //history
  @OneToMany(()=>EmployeeHistory,(history)=>history.employee)
  history:EmployeeHistory[];
  //campaigns
  @OneToMany(() => CampaignEntity, (campaign) => campaign.employee)
  campaigns: CampaignEntity[]
  //products
  @OneToMany(() => ProductEntity, (product) => product.employee)
  products: ProductEntity[]

}
