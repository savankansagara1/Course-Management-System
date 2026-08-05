import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Lesson } from './lesson.model.js';
import { CreateLessonDto } from './dto/create-lesson.dto.js';
import { UpdateLessonDto } from './dto/update-lesson.dto.js';

@Injectable()
export class LessonService {
  constructor(@InjectModel(Lesson) private lessonModel: typeof Lesson) {}

  async create(createLessonDto: CreateLessonDto) {
    return this.lessonModel.create(createLessonDto as any);
  }

  async findAll() {
    return this.lessonModel.findAll();
  }

  async findOne(id: number) {
    return this.lessonModel.findByPk(id);
  }

  async update(id: number, updateLessonDto: UpdateLessonDto) {
    await this.lessonModel.update(updateLessonDto, { where: { id } });
    return this.lessonModel.findByPk(id);
  }

  async remove(id: number) {
    const lesson = await this.lessonModel.findByPk(id);
    if (lesson) {
      await lesson.destroy();
    }
    return lesson;
  }
}
