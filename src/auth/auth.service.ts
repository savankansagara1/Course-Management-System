import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../user/user.model.js';
import { LoginDto } from './dto/login.dto.js';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.userModel.findOne({ where: { email: loginDto.email } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const payload = { id: user.id, email: user.email, role: user.role };
    const access_token = this.jwtService.sign(payload);

    return { access_token };
  }
}
