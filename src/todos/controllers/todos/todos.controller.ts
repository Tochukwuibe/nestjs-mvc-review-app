import { Body, Controller, Delete, Get, Post, Render, Session } from '@nestjs/common';
import { TodosService } from 'src/todos/services/todos/todos.service';

@Controller('todos')
export class TodosController {

    constructor(private todosService: TodosService) { }

    @Get()
    @Render('todos')
    getTodosByUser(@Session() session) {
        const todos = this.todosService.getTodosForUser(session.userId);
        return { todos };
    }

    @Post()
    addTodoForUser(
        @Session() session,
        @Body() body
    ): string {
        return this.todosService.addTodoForUser(session.userId, body.task);
    }

    @Delete()
    removeTodoForUser(
        @Session() session,
        @Body() body
    ): string {
        return this.todosService.deleteTodoForUser(session.userId, body.task);
    }

}
