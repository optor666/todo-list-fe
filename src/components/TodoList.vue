<template>
    <div class="todo-app">
        <h1>📋 TODO List</h1>

        <div class="input-group">
            <input v-model="newTodo" @keyup.enter="addTodo" placeholder="输入新的待办事项" />
            <button @click="addTodo">添加</button>
        </div>

        <ul class="todo-list">
            <li v-for="(todo, index) in todos" :key="index" :class="{done: todo.complated}" >
                <input type="checkbox" v-model="todo.complated" />
                <span>{{todo.content}}</span>
                <button class="delete" @click="deleteTodo(todo.id)">删除</button>
            </li>
        </ul>

        <p v-if="todos.length === 0">暂无待办事项</p>
    </div>
</template>

<script>
    import { apiFetch } from '../utils/api'
    export default {
        name: 'TodoList',
        data() {
            return {
                newTodo: '',
                todos: []
            }
        },
        methods: {
            async addTodo() {
                const content = this.newTodo.trim()
                if (content === '') {
                    return
                }
                const data = await apiFetch('POST', '/api/todo', null, { content })
                
                this.todos.unshift(data)
                this.newTodo = ''
            },
            deleteTodo(index) {
                this.todos.splice(index, 1)
            }
        }
    }
</script>

<style scoped>
.todo-app {
    max-width: 400px;
    margin: 40px ato;
    font-family: Arial, sans-serif;
}

.input-group {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
}

.input-group input {
    flex: 1;
    padding: 6px;
    font-size: 16px;
}

.input-group button {
    padding: 6px 12px;
    font-size: 16px;
    cursor: pointer;
}

.todo-list {
    list-style: none;
    padding: 0;
}

.todo-list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom: 1px solid #eee;
}

.todo-list li.done span {
    text-decoration: line-through;
    color: gray;
}

.todo-list .delete {
    color: red;
    border: none;
    background: none;
    cursor: pointer;
}
</style>

