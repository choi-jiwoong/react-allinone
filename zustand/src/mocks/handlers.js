import { rest } from "msw";

export const handlers = [
  rest.get("/todo", (req, res, ctx) => {
    return res(
      ctx.json({
        todo: {
          task: "sample task",
        }
      })
    );
  }),

  rest.get("/users", (req, res, ctx) => {
    return res(
      ctx.json({
        name: `undefined's name`,
        age: 20,
        address: 'address',
        phone: 'phone'
      }));    
  }),

  rest.get("/users/:userId", (req, res, ctx) => {

    const { userId } = req.params
    if (userId != '1') {
      return res(
        ctx.json({
          name: `${userId}'s name`,
          age: 20,
          address: 'address',
          phone: 'phone'
        }));
    }

    return res(ctx.status(400));
  }),
];
