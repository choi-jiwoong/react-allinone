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

    return res(ctx.status(400)
    );
  }),

  rest.put('/counter/fatchIncrement', (req, res, ctx) => {
    const { value } = req.body
    return res(
      ctx.json({ value: value + 1 })
    )
  }),

  rest.post("/login", (req, res, ctx) => {
    const { username } = req.body;
    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        username,
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),
];
