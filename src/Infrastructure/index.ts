import app from './App'
import {Request} from 'express'

const port = process.env.PORT || 3000

app.listen(port, (err: Request) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
})
