import { IsOptional } from 'class-validator';
import { EmployeeEntity } from 'src/employee/employeeentity.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity("product")
export class ProductEntity{
  @PrimaryGeneratedColumn()
  id: number;


  @Column( { nullable: true })
  namep: string;

  @Column({ nullable: true })
  ProductDescription: number;

  @Column({ nullable: true })
  ProductCategory: string;

  @Column({ nullable: true })
  ProductPrice: number;

  @Column({ nullable: true })
  myfile: string;
  
  @Column({ nullable: true })
  ProductAvailability: string;

  @Column({ nullable: true })
  Productreviews: string;


  @ManyToOne(() => EmployeeEntity, (employee) => employee.products)
    employee: EmployeeEntity

}