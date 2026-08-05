import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Course } from '../course/course.model.js';

@Table
export class Lesson extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare title: string;

  @ForeignKey(() => Course)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare courseId: number;

  @BelongsTo(() => Course)
  declare course: Course;
}
