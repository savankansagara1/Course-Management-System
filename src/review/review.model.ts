import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../user/user.model.js';
import { Course } from '../course/course.model.js';

@Table
export class Review extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare rating: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare comment: string;

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
