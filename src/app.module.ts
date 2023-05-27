import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './employee/employeemodule.module';
import { EmployeeModule2 } from './employee2/employee2.module';
import { DoctorModule } from './doctor/doctor.module';
import { CampaignModule } from './campaign/campaign.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProductModule } from './product/product.module';


@Module({
  imports: [EmployeeModule2, EmployeeModule,DoctorModule,CampaignModule,ProductModule,
    TypeOrmModule.forRoot(
   { type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'emppploy',
    autoLoadEntities: true,
    synchronize: true,
  }
  ),
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', '../public'), // added ../ to get one folder back
    serveRoot: '/public/' //last slash was important
  }),
],
  controllers: [],
  providers: [],
})
export class AppModule {}