import { ApiProperty } from '@nestjs/swagger';

export class HoursDto {
  @ApiProperty({ default: '16:00' })
  hourInit: string;
  @ApiProperty({ default: '23:00' })
  hourEnd: string;
}
