import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../user/user.model.js';

@Table
export class Profile extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare bio: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare userId: number;

  @BelongsTo(() => User)
  declare user: User;
}
