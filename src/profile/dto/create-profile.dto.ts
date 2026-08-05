import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsNotEmpty()
  @IsString()
  bio: string;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
