import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/shared/dtos/create-task.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Task } from 'src/shared/schemas/tasks.schema';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    @ApiResponse({
        status: 200,
        description: 'The tasks have been successfully obtained',
        type: [Task]
    })
    getTasks() {
        return this.tasksService.findAll();
    }

    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'The task has been successfully obtained',
        type: Task
    })
    getTasksById(@Param('id') id: string) {
        return this.tasksService.findById(id);
    }

    @Post()
    @ApiResponse({
        status: 201,
        description: 'The task has been successfully created',
        type: Task
    })
    createTask(@Body() task: CreateTaskDto) {
        return this.tasksService.create(task);
    }

    @Put(':id')
    updateTask(@Param('id') id: string, @Body() task: CreateTaskDto) {
        return this.tasksService.update(id, task);
    }

    @Delete(':id')
    @ApiResponse({
        status: 204,
        description: 'The task has been successfully deleted'
    })
    deleteTask(@Param('id') id: string) {
        return this.tasksService.delete(id);
    }
}
