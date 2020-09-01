import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { TasksController } from "./tasks.controller";
import { TasksService } from "./tasks.service";
import { tasksProviders } from "./tasks.providers";

@Module({
    imports: [DatabaseModule],
    controllers: [TasksController],
    providers: [
        TasksService,
        ...tasksProviders
    ]
})
export class TaskModule {}