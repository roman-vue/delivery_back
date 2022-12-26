import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AditionalsService } from './aditionals.service';
import {
  CreateNewAditionalsDto,
  UpdateAditionalsDto,
} from './dtos/input/aditionals.dto';

@ApiTags('ADITIONALS')
@Controller('aditionals')
export class AditionalsController {
  constructor(private readonly aditionalsService: AditionalsService) {}

  @Post('create-new-aditionals')
  public async createNewAditionals(
    @Body() createNewAditionalsDto: CreateNewAditionalsDto,
  ) {
    const data = await this.aditionalsService.createCategory(
      createNewAditionalsDto,
    );
    return data;
  }

  @Get('all-aditionals')
  public async allAditionals() {
    const data = await this.aditionalsService.allAditionals();
    return data;
  }

  @Get('one-aditionals/:idAditionals')
  public async oneAditionals(@Param('idAditionals') idAditionals: string) {
    const data = await this.aditionalsService.getOneAditionals(idAditionals);
    return data;
  }

  @Put('update-aditionals/:idAditionals')
  public async updated(
    @Param('idAditionals') idAditionals: string,
    @Body() updateAditionalsDto: UpdateAditionalsDto,
  ) {
    const data = await this.aditionalsService.updated(
      idAditionals,
      updateAditionalsDto,
    );
    return data;
  }

  @Delete('delete-aditionals/:idAditionals')
  public async deleted(@Param('idAditionals') idAditionals: string) {
    const data = await this.aditionalsService.deleted(idAditionals);
    return data;
  }
}
