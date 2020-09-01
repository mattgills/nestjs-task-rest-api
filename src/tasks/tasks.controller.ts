import { Controller, Get, Param, ParseUUIDPipe, Post, HttpCode } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getTasks() {
        return this.tasksService.findAll();
    }

    @Get(':id')
    getTasksById(@Param('id') id: string) {
        return this.tasksService.findById(id);
    }
}
