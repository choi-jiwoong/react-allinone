import { rest } from "msw";

export const handlers = [
  rest.get("/api/users", (req, res, ctx) => {

    const pageIndex = req.url.searchParams.get('page')


    return res(
      ctx.json(
        [
          {
            name: `list 1 ${pageIndex}'s name`,
            age: 20,
            address: 'address',
            phone: 'phone'
          },
          {
            name: `list 2 ${pageIndex}'s name`,
            age: 20,
            address: 'address',
            phone: 'phone'
          },
          {
            name: `list 3 ${pageIndex}'s name`,
            age: 20,
            address: 'address',
            phone: 'phone'
          },
          {
            name: `list 4 ${pageIndex}'s name`,
            age: 20,
            address: 'address',
            phone: 'phone'
          },
          {
            name: `list 5 ${pageIndex}'s name`,
            age: 20,
            address: 'address',
            phone: 'phone'
          }
        ]
      ));    
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
