import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
    @ApiProperty()
    @IsNotEmpty()
    _id: string;

    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    description: string;
    
    @ApiProperty()
    @IsNotEmpty()
    dueDate: Date;

    @ApiProperty()
    @IsNotEmpty()
    completed: Boolean;
}