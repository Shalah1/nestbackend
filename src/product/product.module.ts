import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";




@Module({
imports: [TypeOrmModule.forFeature([ProductEntity])],
controllers: [],
providers: [],

})

export class ProductModule {}