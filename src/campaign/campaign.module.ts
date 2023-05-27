import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CampaignEntity } from "./campaign.entity";




@Module({
imports: [TypeOrmModule.forFeature([CampaignEntity])],
controllers: [],
providers: [],

})

export class CampaignModule {}