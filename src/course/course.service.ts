import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Course } from './course.model.js';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course) private courseModel: typeof Course) {}

  async create(createCourseDto: CreateCourseDto) {
    return this.courseModel.create(createCourseDto as any);
  }

  async findAll() {
    return this.courseModel.findAll();
  }

  async findOne(id: number) {
    return this.courseModel.findByPk(id);
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    await this.courseModel.update(updateCourseDto, { where: { id } });
    return this.courseModel.findByPk(id);
  }

  async remove(id: number) {
    const course = await this.courseModel.findByPk(id);
    if (course) {
      await course.destroy();
    }
    return course;
  }
}
