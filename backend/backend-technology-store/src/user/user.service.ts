import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './DTO/CreateUserDto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  async AddUser(user: Omit<CreateUserDto, 'confirmPassword'>): Promise<User> {
    const userCreate = this.userRepository.create({
      email: user.email,
      password: user.password,
      isActive: true,
    });

    return await this.userRepository.save(userCreate);
  }
}
