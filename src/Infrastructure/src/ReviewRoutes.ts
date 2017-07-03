import * as express from 'express'
import {Router} from 'express'
import {ReviewController} from './ReviewController'
export class ReviewRoutes {
  private router: Router
  private static basePat: string = '/review'

  constructor (private controller = new ReviewController()) {
    this.router = express.Router()
  }

  getRoutes (): Router {
    this.router.use(`${ReviewRoutes.basePat}/update`, this.controller.update)
    return this.router
  }
}
