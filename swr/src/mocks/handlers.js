import { rest } from "msw";

export const handlers = [
  rest.get("/api/users", (req, res, ctx) => {
    return res(
      ctx.json({
        name: `undefined's name`,
        age: 20,
        address: 'address',
        phone: 'phone'
      }));    
  }),

  rest.get("/api/users/:userId", (req, res, ctx) => {

    const { userId } = req.params
    if (userId !== '1') {
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
