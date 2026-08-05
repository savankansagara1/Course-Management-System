import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany, BelongsToMany } from 'sequelize-typescript';
import { User } from '../user/user.model.js';
import { Lesson } from '../lesson/lesson.model.js';
import { Enrollment } from '../enrollment/enrollment.model.js';
import { Review } from '../review/review.model.js';

@Table
export class Course extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare title: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare teacherId: number;

  @BelongsTo(() => User, 'teacherId')
  declare teacher: User;

  @HasMany(() => Lesson)
  declare lessons: Lesson[];

  @HasMany(() => Review)
  declare reviews: Review[];

  @BelongsToMany(() => User, () => Enrollment)
  declare students: User[];
}
