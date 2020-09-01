import { Document } from 'mongoose';

export interface Task extends Document {
    readonly name: String,
    readonly description: String,
    readonly dueDate: Date,
    readonly completed: Boolean
}