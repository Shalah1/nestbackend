import { Entity ,Column,PrimaryGeneratedColumn,ManyToOne} from "typeorm";
import { EmployeeEntity } from "./employeeentity.entity";

@Entity('EmployeeHistory')
export class EmployeeHistory{

    @PrimaryGeneratedColumn()
    id: number;
    @Column({type:'varchar',nullable:false})

    des:string;
    @Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP',nullable:false})
    
    time:Date;
    @Column({nullable:false})
    employeeId: number;

    @ManyToOne(()=> EmployeeEntity,(employee)=>employee.history,{nullable:false})
    employee:EmployeeEntity;
}

