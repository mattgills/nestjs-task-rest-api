import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Task extends Document {
    @ApiProperty()
    @Prop({ required: true})
    _id: string;

    @ApiProperty()
    @Prop({ required: true})
    name: string;

    @ApiProperty()
    @Prop({ required: true})
    description: string;

    @ApiProperty()
    @Prop({ required: true})
    dueDate: Date;

    @ApiProperty()
    @Prop({ required: true})
    completed: Boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);