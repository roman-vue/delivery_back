import { ApiProperty } from '@nestjs/swagger';

export class ResponseCommonDto {
  @ApiProperty({ default: '10ms' })
  duration: string;
  @ApiProperty({ default: 'POST' })
  method: string;
  @ApiProperty({ default: 201 })
  status: number;
}
