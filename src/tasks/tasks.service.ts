import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Task } from '../shared/interfaces/tasks.interface';
import { CreateTaskDto } from 'src/shared/dtos/create-task.dto';

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

    async create(task: CreateTaskDto) {
        const newTask = new this.taskModel(task);
        return newTask.save();
    }

    async update(id: string, task: CreateTaskDto) {
        return this.taskModel.updateOne({ _id: id }, task);
    }
}
