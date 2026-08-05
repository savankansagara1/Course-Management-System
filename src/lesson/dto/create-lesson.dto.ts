import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLessonDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  courseId: number;
}
