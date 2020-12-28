import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {

    private todos = {} as { [id: string]: string[] };


    public getTodosForUser(userId: string) {
        return this.todos[userId] || [];
    }

    public addTodoForUser(userId: string, task: string) {
        this.todos[userId] = (this.todos[userId] || []).concat([task]);
        return task
    }

    public deleteTodoForUser(userId: string, task: string) {
        this.todos[userId] = (this.todos[userId] || []).filter(t => t === task);
        return task
    }

}
