import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect('mongodb://localhost:27017/tasks_db'),
            // mongoose.connect('mongodb://database:27000/tasks_db'),
    },
];