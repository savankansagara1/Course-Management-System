import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module.js';
import { ProfileModule } from './profile/profile.module.js';
import { CourseModule } from './course/course.module.js';
import { LessonModule } from './lesson/lesson.module.js';
import { EnrollmentModule } from './enrollment/enrollment.module.js';
import { ReviewModule } from './review/review.module.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Dev@1234',
      database: 'course_management_db',
      autoLoadModels: true,
      synchronize: true,
    }),
    UserModule,
    ProfileModule,
    CourseModule,
    LessonModule,
    EnrollmentModule,
    ReviewModule,
    AuthModule,
  ],
})
export class AppModule {}
