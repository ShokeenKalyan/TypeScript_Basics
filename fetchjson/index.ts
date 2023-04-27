// Tu compile and run TS code, we use - 'tsc index.ts' (Creates index.js for index.ts) and then 'node index.js'
// To combine above 2, we can simply use 'ts-node index.ts'

// With TS, we can see erros in development phase and not rely in compilation or run-time phase

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}
// Interfaces in TS are used to define the structure of an object with exact field names and their types
// This way, we tell TS what type of information we are going to expect to receive back from the API
// We can ignore some actual properties like userID on the API response

axios.get(url).then(reponse => {
    const todo = reponse.data as Todo;
    
    // const ID = todo.ID // TS throws error, but JS do not (It will only do so after actual execution in browser or NodeJS)
    const id = todo.id;
    // const title = todo.Title // TS throws error
    const title = todo.title;
    // const finsidhed = todo.finished // TS throws error
    const completed = todo.completed;
    
    // logTodo(id, completed, title); // TS throws error - Argument of type boolean not assignable to type string
    logTodo(id, title, completed);   
})

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        The TODO with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
    `);
}
