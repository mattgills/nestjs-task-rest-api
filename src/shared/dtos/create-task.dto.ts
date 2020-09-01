import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;
    
    @IsNotEmpty()
    dueDate: Date;

    @IsNotEmpty()
    completed: Boolean;
}