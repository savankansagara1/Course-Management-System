import { Table, Column, Model, DataType, HasOne, HasMany, BelongsToMany } from 'sequelize-typescript';
import { Profile } from '../profile/profile.model.js';
import { Course } from '../course/course.model.js';
import { Enrollment } from '../enrollment/enrollment.model.js';
import { Review } from '../review/review.model.js';

export enum Role {
  ADMIN = 'ADMIN',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
}

@Table
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.ENUM(...Object.values(Role)),
    allowNull: false,
  })
  declare role: Role;

  @HasOne(() => Profile)
  declare profile: Profile;

  @HasMany(() => Course, 'teacherId')
  declare courses: Course[];

  @HasMany(() => Review)
  declare reviews: Review[];

  @BelongsToMany(() => Course, () => Enrollment)
  declare enrolledCourses: Course[];
}
