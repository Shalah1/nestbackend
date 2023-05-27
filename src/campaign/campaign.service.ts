import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CampaignEntity } from "./campaign.entity";
import { CampaignFormUpdate } from "src/employee/employeeformupdate.dto";



@Injectable()
export class CampaignService {
    constructor(
        @InjectRepository(CampaignEntity)
        private campaignRepo: Repository<CampaignEntity>,
      ) {}


insertCampaign(mydto):any {
    
   return this.campaignRepo.save(mydto);
      }
      getCampaignsByemployeeID(id):any {
        return this.campaignRepo.find({ 
                where: {id:id},
            relations: {
                employee: true,
            },
         });
    }
    getCampaignIndex():any { 
        return this.campaignRepo.find();
    
    }





    
deleteCampaignbyid(id):any {
    
    return this.campaignRepo.delete(id);
}

    UpdateCampaign(mydto):any {
    
        return this.campaignRepo.save(mydto);
           }
           UpdateCampaignByemployeeID(id):any {
             return this.campaignRepo.find({ 
                     where: {id:id},
                 relations: {
                     employee: true,
                 },
              });
         }
}