import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  ParseIntPipe,
  Post,
  Patch,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  Session,
  UseGuards,
  Res,
  Header,
  HttpCode
} from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { DoctorForm } from 'src/doctor/doctor.dto';
import { DoctorService } from 'src/doctor/doctor.service';
import { EmployeeForm2 } from 'src/employee2/employee2.dto';
import { EmployeeService2 } from 'src/employee2/employeeservice2.service';
import { EmployeeForm } from './employeeform.dto';
import { EmployeeFormUpdate, EmployeeFormUpdate2, } from './employeeformupdate.dto';
import { EmployeeService } from './employeeservice.service';
import { CampaignService } from 'src/campaign/campaign.service';
import { SessionGuard } from './session.guard';
import { CampaignForm } from 'src/campaign/campaign.dto';
import { ProductService } from 'src/product/product.service';
import { ProductForm } from 'src/product/product.dto';



@Controller('/employee')
export class EmployeeController {
  
  constructor(private employeeService: EmployeeService,
    private employeeService2: EmployeeService2,
    private doctorService: DoctorService,
    private CampaignService: CampaignService,
    private productService: ProductService,
    ) {}

  @Get('/index')
  getEmployee(): any {
    return this.employeeService.getIndex();
  }

  @Get('/index2')
  getEmployee2(): any {
    return this.employeeService2.getIndex2();
  }

  @Get('/ProductIndex')
  getProducts(): any {
    return this.productService.getProductIndex();
  }
  
  @Get('/CampaignIndex')
  getcampaigns(): any {
    return this.CampaignService.getCampaignIndex();
  }
  
  @Get('/DoctorIndex')
  getDoctors(): any {
    return this.doctorService.getDoctorIndex();
  }
  @Get('/findemployee/:id')
  getEmployeeByID(@Param('id', ParseIntPipe) id: number): any {
    return this.employeeService.getUserByID(id);
  }
    
  @Get('/findemployee2/:id')
  getEmployee2ByID(@Param('id', ParseIntPipe) id: number): any {
    return this.employeeService2.getUser2ByID(id);
  }


  @Get('/findemployee')
  getEmployeeByIDName(@Query() qry: any): any {
    return this.employeeService.getUserByIDName(qry);
  }

  @Get('/findemployee2')
  getEmployee2ByIDName(@Query() qry: any): any {
    return this.employeeService2.getUser2ByIDName(qry);
  }
  // *********************************senioremp******************************************
  @Post('/insertemployee')
  @UseInterceptors(FileInterceptor('myfile',
  {storage:diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
      cb(null,Date.now()+file.originalname)
    }
  })
  }))
  insertemployee(@Body() mydto:EmployeeForm,@UploadedFile(  new ParseFilePipe({
    validators: [
      new MaxFileSizeValidator({ maxSize: 660000 }),
      new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
    ],
  }),) file: Express.Multer.File){
  
  mydto.filename = file.filename;  
  console.log(mydto)
  return this.employeeService.insertUser(mydto);
  }

  @Put('/updateemployee/')
  @UseGuards(SessionGuard)
 // @UsePipes(new ValidationPipe())
  updateemployee(@Session() session,@Body('name') name: string): any {
    console.log(session.email);
    return this.employeeService.updateUser(name, session.email);
  }
  // @Put('/updateemployee/:id')
  // @UseGuards(SessionGuard)
  // @UsePipes(new ValidationPipe())
  // updateEmployeebyid(
  //   @Body() mydto: EmployeeFormUpdate,
  //   @Param('id', ParseIntPipe) id: number,
  // ): any {
  //   return this.employeeService.updateUserbyid(mydto, id);
  // }
  @Put('/updateemployee/:id')
  //@UseGuards(SessionGuard)
  updateemployeebyid(
    @Body() mydto: EmployeeFormUpdate,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.employeeService.updateUserbyid(mydto, id);
  }

  @Delete('/deleteemployee/:id')
  deleteemployeebyid(@Param('id', ParseIntPipe) id: number): any {
    return this.employeeService.deleteUserbyid(id);
   
  }
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*
  @Get('/getimage/:name')
  getImages(@Param('name') name, @Res() res) {
    res.sendFile(name,{ root: './uploads' })
  }
// ----------------------------------------------------------------
  // @Post('/insertemployee2')
  // @UsePipes(new ValidationPipe())
  // iinsertEmployee2(@Body() mydto: EmployeeForm2): any {
  //   return this.employeeService2.insertUser2(mydto);
  // }


  // @Put('/updateemployee2/')
  // @UseGuards(SessionGuard)
  // @UsePipes(new ValidationPipe())
  // updateEmployee2(@Session() session,@Body('name') name: string): any {
  //   console.log(session.email);
  //   return this.employeeService2.updateUser2(name, session.email);
  // }

  // @Put('/updateemployee2/:id')
  // @UseGuards(SessionGuard)
  // @UsePipes(new ValidationPipe())
  // updateEmployee2byid(
  //   @Body() mydto: EmployeeFormUpdate2,
  //   @Param('id', ParseIntPipe) id: number,
  // ): any {
  //   return this.employeeService2.updateUser2byid(mydto, id);
  // }

  
  @Get('/history/:id')
    @UseGuards(SessionGuard)
getHistory(@Param('id',ParseIntPipe)id:number){
  return this.employeeService.getHistory(id);
}

// @Delete('/deleteemployee/:id')
// @UseGuards(SessionGuard)
// deleteEmployeebyid(@Param('id', ParseIntPipe) id: number): any {
//  return this.employeeService.deleteUserbyid(id);

// }

  // @Delete('/deleteemployee2/:id')
  //  @UseGuards(SessionGuard)
  // deleteEmployee2byid(@Param('id', ParseIntPipe) id: number): any {
  //   return this.employeeService2.deleteUser2byid(id);
   
  // }
  // campaign//////////////////////////////////////////
  
  @Post('/insertCampaign')
  @UseInterceptors(FileInterceptor('myfile',
  {storage:diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) { console.log() 
      
      cb(null,Date.now()+file.originalname)
    }

  })
  }))
    insertCampaign(@Body() campaigndto: any, @UploadedFile(  new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 60000000000 }),
          new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
      }),) file: Express.Multer.File): any {
        campaigndto.myfile = file.filename; 
      return this.CampaignService.insertCampaign(campaigndto);
    }

    @Put('/UpdateCampaign')
    //@UsePipes(new ValidationPipe())
      UpdateCampaign(@Body() campaigndto: CampaignForm): any {
        return this.CampaignService.UpdateCampaign(campaigndto);
      }

  
  @Delete('/deletecampaign/:id')
//  @UseGuards(SessionGuard)
 deleteCampaignbyid(@Param('id', ParseIntPipe) id: number): any {
   return this.CampaignService.deleteCampaignbyid(id); 
 }

 @Get('/findcampaignsbyemployee/:id')
 getCampaignsByemployeeID(@Param('id', ParseIntPipe) id: number): any {
    return this.CampaignService.getCampaignsByemployeeID(id);
  }

  @Get('/findemployeebycampaigns/:id')
  getEmployeeByCampaignsID(@Param('id', ParseIntPipe) id: number): any {
   
     return this.CampaignService.getCampaignsByemployeeID(id);
  }


  ///////product////////////////////////////////////////////////////////////////////////
  @Post('/insertProduct')
  @UseInterceptors(FileInterceptor('myfile',
  {storage:diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) { console.log() 
      
      cb(null,Date.now()+file.originalname)
    }
    
  })
  }))
  
 // @UsePipes(new ValidationPipe())
    insertProduct(@Body() productdto: any,@UploadedFile(  new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 6000000 }),
        new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
      ],
    }),) file: Express.Multer.File): any {
      productdto.myfile = file.filename;  
      return this.productService.insertProduct(productdto);
    }
  
    @Put('/UpdateProduct')
   // @UsePipes(new ValidationPipe())
      UpdateProduct(@Body() productdto: ProductForm): any {
        return this.productService.UpdateProduct(productdto);
      }
    

  
  @Delete('/deleteproduct/:id')
  @UseGuards(SessionGuard)
 deleteProductbyid(@Param('id', ParseIntPipe) id: number): any {
   return this.productService.deleteProductbyid(id); 
 }

   @Get('/findproductsbyemployee/:id')
   getProductsByemployeeID(@Param('id', ParseIntPipe) id: number): any {
      return this.productService.getProductsByemployeeID(id);
    }

    @Get('/findemployeebyproduct/:id')
    getEmployeeByProductID(@Param('id', ParseIntPipe) id: number): any {
     
      //  return this.productService.getProductsByemployeeID(id);
       return this.productService.getProductsByemployeeID(id);
    }
  

 //doctor//////////////////////////////////////////////////////////////////////////////////
  
   @Post('/insertdoctor')
  // @UsePipes(new ValidationPipe())
    insertDoctor(@Body() doctordto: DoctorForm): any {
      return this.doctorService.insertDoctor(doctordto);
    }

      @Put('/Updatedoctor')
      UpdateDoctor(@Body() doctordto: DoctorForm,
      @Param('id', ParseIntPipe) id: number,): any {
        return this.doctorService.Updatedoctor(doctordto);
      }


  
  @Delete('/deletedoctor/:id')
 // @UseGuards(SessionGuard)
  deleteDoctorbyid(@Param('id', ParseIntPipe) id: number): any {
   return this.doctorService.deleteDoctorbyid(id); 
 }
   
    @Get('/finddoctorsbyemployee/:id')
    getDoctorByEmployeeID(@Param('id', ParseIntPipe) id: number): any {
      return this.employeeService.getDoctorsByemployeeID(id);
    }

    @Get('/findemployeebydoctor/:id')
    getEmployeeByDoctorID(@Param('id', ParseIntPipe) id: number): any {
     
       return this.doctorService.getDoctorsByemployeeID(id);
    }



//  internnnnnnnnnnnaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  @Post('/insertemployee2')
  //@UsePipes(new ValidationPipe())
  insertEmployee2(@Body() employee2dto: EmployeeForm2): any {
    return this.employeeService2.insertEmployee2(employee2dto);
   }

    @Put('/updateemployee2/')
  //@UseGuards(SessionGuard)
  //@UsePipes(new ValidationPipe())
  updateEmployee2(@Session() session,@Body('name') name: string): any {
    console.log(session.email);
    return this.employeeService2.updateUser2(name, session.email);
  }

  @Put('/updateemployee2/:id')
   //@UseGuards(SessionGuard)
  updateEmployee2byid(
    @Body() mydto: EmployeeFormUpdate2,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.employeeService2.updateUser2byid(mydto, id);
  }

  @Delete('/deleteemployee2/:id')
  //@UseGuards(SessionGuard)
 deleteEmployee2byid(@Param('id', ParseIntPipe) id: number): any {
   return this.employeeService2.deleteUser2byid(id);
  
 }

    @Get('/findemployee2byemployee/:id')
    getEmployee2ByemployeeID(@Param('id', ParseIntPipe) id: number): any {
       return this.employeeService.getEmployee2sByemployeeID(id);
    }
    @Get('/findemployeebyemployee2/:id')
    getEmployeeByEmployee2sID(@Param('id', ParseIntPipe) id: number): any {
       return this.employeeService2.getEmployee2sByemployeeID(id);
    }
  
    // ******************************************************************

@Post('/signup')
@UseInterceptors(FileInterceptor('myfile',
{storage:diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null,Date.now()+file.originalname)
  }
})

}))
signup(@Body() mydto:EmployeeForm,@UploadedFile(  new ParseFilePipe({
  validators: [
    new MaxFileSizeValidator({ maxSize: 600000 }),
    new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
  ],
}),) file: Express.Multer.File){

mydto.filename = file.filename;  

return this.employeeService.signup(mydto);
console.log(file)
}

//@Get('/signin') 
@Post('/signin')
signin(@Session() session, @Body() mydto:EmployeeForm)
{
if(this.employeeService.signin(mydto))
{
  session.email = mydto.email;

  console.log(session.email);
  return {message:"success"};

}
else
{
  return {message:"invalid credentials"};
}
 }
@Get('/signout')
signout(@Session() session)
{
  if(session.destroy())
  {
    return {message:"you are logged out"};
  }
  else
  {
    throw new UnauthorizedException("invalid actions");
  }
}
@Post('/sendemail')
sendEmail(@Body() mydata){
return this.employeeService.sendEmail(mydata);
}
}




