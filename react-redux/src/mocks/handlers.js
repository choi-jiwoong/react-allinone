import { rest } from 'msw'

export const handlers = [

  rest.put('/counter/fatchIncrement', (req, res, ctx) => {
    const { value } = req.body
    return res(
      ctx.json({ value: value + 1 })
    )
  }),


  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    )
  }),
]

