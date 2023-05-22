import { rest } from 'msw'

export const handlers = [
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
  rest.get('https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json', async (req, res, ctx) => {

    const error = req.url.searchParams.get('error')
    if (error === 'true') {
      return res(
        ctx.status(500),
        ctx.json({
          message: 'Internal server error',
        })
      )
    }
    const originalResponse = await ctx.fetch(req)
    const originalResponseData = await originalResponse.json()
      
    return res(
      ctx.json({
        "data": {
          "people" :
          [
            ...originalResponseData.data.people,
            {
              "name": "jiwoong",
              "age": 49
            }
          ]
        }
      }
    ))
  }),
]

