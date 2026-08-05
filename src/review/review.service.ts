import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Review } from './review.model.js';
import { CreateReviewDto } from './dto/create-review.dto.js';
import { UpdateReviewDto } from './dto/update-review.dto.js';

@Injectable()
export class ReviewService {
  constructor(@InjectModel(Review) private reviewModel: typeof Review) {}

  async create(createReviewDto: CreateReviewDto) {
    return this.reviewModel.create(createReviewDto as any);
  }

  async findAll() {
    return this.reviewModel.findAll();
  }

  async findOne(id: number) {
    return this.reviewModel.findByPk(id);
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    await this.reviewModel.update(updateReviewDto, { where: { id } });
    return this.reviewModel.findByPk(id);
  }

  async remove(id: number) {
    const review = await this.reviewModel.findByPk(id);
    if (review) {
      await review.destroy();
    }
    return review;
  }
}
