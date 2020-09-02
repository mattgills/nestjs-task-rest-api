import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskModule } from './tasks.module';

describe('Tasks Controller', () => {
  let controller: TasksController;
  let testTask = {
    "_id": "5f4f123af275a94a2bca10e0",
    "name": "Create Database",
    "description": "this will be deleted",
    "dueDate": new Date(),
    "completed": true
  }
  //let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController]
    }).compile();

    controller = module.get<TasksController>(TasksController);
    //service = module.get<TasksService>(TasksService);
  });

  // Start by checking to make sure the controller is defined
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Create the test task via the POST method
  // This will provide us data to check for future tests
  describe('createTask', () => {
    it('should create and return a single task', () => {
      expect(controller.createTask(testTask)).toMatchObject(testTask);
    });
  });

  // Obtain all tasks from the generic GET method
  // The result array should contain the test task
  describe('getTasks', () => {
    it('should an array of tasks that contains the test task', () => {
      expect(controller.getTasks()).toContain(testTask);
    });
  });

  // Obtain the test task via ID from the specific GET method
  // The result should match the test task object
  describe('getTasksById', () => {
    it('should return a single task', () => {
      expect(controller.getTasksById(testTask._id)).toMatchObject(testTask);
    });
  });

  // Update the test task via ID from the PUT method
  // The result should be the mongoose modified object
  describe('updateTask', () => {
    it('should update a single task and return the mongoose update object', () => {
      expect(controller.updateTask(testTask._id, {...testTask, completed: false})).toMatchObject({
        "n": 1,
        "nModified": 1,
        "ok": 1
      });
    });
  });

  // Remove the test task via ID from the DELETE method
  // The result should be the mongoose deleted object
  describe('deleteTask', () => {
    it('should delete a single task and return the mongoose delete object', () => {
      expect(controller.deleteTask(testTask._id)).toMatchObject({
        "n": 1,
        "ok": 1,
        "deletedCount": 1
      });
    });
  });
});
