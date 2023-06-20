import { rest } from "msw";

const todos = [
  {
    id: 1,
    title: 'title 1',
  },
  {
    id: 2,
    title: 'title 2',
  },
  {
    id: 3,
    title: 'title 3',
  },
  {
    id: 4,
    title: 'title 4',
  },
  {
    id: 5,
    title: 'title 5',
  }
];

export const handlers = [
  rest.get("/api/todos", (req, res, ctx) => {

    return res(ctx.json(todos));    
  }),

  rest.post("/api/todos", (req, res, ctx) => {
    
    
    const { todo } = req.body;
    console.log('todo', todo);
    todos.push(todo);
    
    return res(ctx.json(true));
      
  }),
];
