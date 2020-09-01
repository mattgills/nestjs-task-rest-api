import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Task } from '../shared/interfaces/tasks.interface';

@Injectable()
export class TasksService {
    constructor(
        @Inject('TASK_MODEL') private taskModel: Model<Task>
    ) {}

    async findAll(): Promise<Task[]> {
        return this.taskModel.find().exec();
    }

    async findById(id: string): Promise<Task> {
        return this.taskModel.findById(id).exec();
    }
}
