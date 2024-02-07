import { Elysia } from 'elysia'

// Instantiate Elysia
const app = new Elysia()

// Routes
app
  .get('/', () => 'THIS IS THE API SERVER')
  .get('/foo/:id', ({ params: { id } }) => console.log(id))
  .post('/todos', async (req: any) => {
    console.log(req.body)
    const outputTxt: string = req.body.todo
    return `<li>${req.body.todo}</li>`
  })

// Start server
app.listen(3000)
console.log(`🦊 TPG-API is running at http://${app.server?.hostname}:${app.server?.port}`)
