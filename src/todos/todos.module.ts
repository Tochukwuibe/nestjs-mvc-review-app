import { Module } from '@nestjs/common';
import { TodosController } from './controllers/todos/todos.controller';
import { TodosService } from './services/todos/todos.service';

@Module({
  controllers: [TodosController],
  providers: [TodosService]
})
export class TodosModule {}
