import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async create(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto as any);
  }

  async findAll() {
    return this.userModel.findAll();
  }

  async findOne(id: number) {
    return this.userModel.findByPk(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userModel.update(updateUserDto, { where: { id } });
    return this.userModel.findByPk(id);
  }

  async remove(id: number) {
    const user = await this.userModel.findByPk(id);
    if (user) {
      await user.destroy();
    }
    return user;
  }
}
