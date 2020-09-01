import { Controller, Get, Param, ParseUUIDPipe, Post, HttpCode, Body, Put, Delete } from '@nestjs/common';
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
    createTask(@Body() task: CreateTaskDto) {
        return this.tasksService.create(task);
    }

    @Put(':id')
    updateTask(@Param('id') id: string, @Body() task: CreateTaskDto) {
        return this.tasksService.update(id, task);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        return this.tasksService.delete(id);
    }
}
