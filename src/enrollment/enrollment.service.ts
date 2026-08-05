import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Enrollment } from './enrollment.model.js';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto.js';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto.js';

@Injectable()
export class EnrollmentService {
  constructor(@InjectModel(Enrollment) private enrollmentModel: typeof Enrollment) {}

  async create(createEnrollmentDto: CreateEnrollmentDto) {
    return this.enrollmentModel.create(createEnrollmentDto as any);
  }

  async findAll() {
    return this.enrollmentModel.findAll();
  }

  async findOne(id: number) {
    return this.enrollmentModel.findByPk(id);
  }

  async update(id: number, updateEnrollmentDto: UpdateEnrollmentDto) {
    await this.enrollmentModel.update(updateEnrollmentDto, { where: { id } });
    return this.enrollmentModel.findByPk(id);
  }

  async remove(id: number) {
    const enrollment = await this.enrollmentModel.findByPk(id);
    if (enrollment) {
      await enrollment.destroy();
    }
    return enrollment;
  }
}
