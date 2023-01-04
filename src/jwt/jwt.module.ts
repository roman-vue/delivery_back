import { Module } from '@nestjs/common';
import { JwtService } from './jwt.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin, AdminSchema } from 'src/database/schemas/Admin/admin.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }]),
  ],
  providers: [JwtService],
  exports: [JwtService],
})
export class JwtModule {}
