import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Profile } from './profile.model.js';
import { CreateProfileDto } from './dto/create-profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dto.js';

@Injectable()
export class ProfileService {
  constructor(@InjectModel(Profile) private profileModel: typeof Profile) {}

  async create(createProfileDto: CreateProfileDto) {
    return this.profileModel.create(createProfileDto as any);
  }

  async findAll() {
    return this.profileModel.findAll();
  }

  async findOne(id: number) {
    return this.profileModel.findByPk(id);
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
    await this.profileModel.update(updateProfileDto, { where: { id } });
    return this.profileModel.findByPk(id);
  }

  async remove(id: number) {
    const profile = await this.profileModel.findByPk(id);
    if (profile) {
      await profile.destroy();
    }
    return profile;
  }
}
