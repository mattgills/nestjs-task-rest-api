import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task extends Document {
    @Prop({ required: true})
    name: string;

    @Prop({ required: true})
    description: string;

    @Prop({ required: true})
    dueDate: Date;

    @Prop({ required: true})
    completed: Boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);