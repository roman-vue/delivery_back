import { ApiProperty } from '@nestjs/swagger';
import { ResponseCommonDto } from 'src/common/response/response.dto';

export class SignInResponse {
  @ApiProperty()
  common: ResponseCommonDto;
}
