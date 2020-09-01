import { Controller, Get, Param, ParseUUIDPipe, Post, HttpCode, Body, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/shared/dtos/create-task.dto';

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

    @Post()
    create(@Body() task: CreateTaskDto) {
        return this.tasksService.create(task);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() task: CreateTaskDto) {
        return this.tasksService.update(id, task);
    }
}
