import * as mongoose from 'mongoose';
console.log(process.env.DB_HOST)
export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true }),
            // mongoose.connect('mongodb://localhost:27017/tasks_db'),
            // mongoose.connect('mongodb://database:27000/tasks_db'),
    },
];