import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './../entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepo: Repository<User>
    ) { }

    findAll() {
        return this.userRepo.find();
    }

    findOne(id: number) {
        return this.userRepo.findOne(id);
    }

    create(body: any) {
        // forma 1
        /* const newUser = new User();
        newUser.name = body.name; */

        // forma 2
        const newUser = this.userRepo.create(body);
        return this.userRepo.save(newUser);
    }

    async update(id: number, body: any) {
        const user = await this.userRepo.findOne(id);
        this.userRepo.merge(user, body);
        return this.userRepo.save(user);
    }

    async delete(id: number) {
        await this.userRepo.delete(id);
        return true;
    }
}
