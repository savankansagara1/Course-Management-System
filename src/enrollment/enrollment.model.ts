import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../user/user.model.js';
import { Course } from '../course/course.model.js';

@Table
export class Enrollment extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare userId: number;

  @ForeignKey(() => Course)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare courseId: number;

  @BelongsTo(() => User)
  declare user: User;

  @BelongsTo(() => Course)
  declare course: Course;
}
