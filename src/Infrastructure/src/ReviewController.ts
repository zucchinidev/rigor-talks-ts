import * as express from 'express'
import {InMemoryReviewRepository} from '../../Review/Application/Infraestructure/InMemoryReviewRepository'
import {Review, ReviewStates} from '../../Review/Application/Domain/Review'

class UpdateReviewResponse {
  constructor (private message: string = '', private code: number = 200) {}

  setMessage (message: string) {
    this.message = message
  }

  setCode (code: number) {
    this.code = code
  }
}

class UpdateReviewService {
  constructor (private updateReviewResponse: UpdateReviewResponse, private reviewRepository: InMemoryReviewRepository /*TODO inject eventDispatcher o el publisher y un logger*/) {}

  perform (reviewId: string): UpdateReviewResponse {
    const review: Review = <Review>this.reviewRepository.find(reviewId)
    let message = ''
    if (typeof review !== 'undefined') {
      message = (review.getState() === ReviewStates.IN_PROGRESS) ? 'update review' : 'review in progress'
    } else {
      message = 'review not found'
      this.updateReviewResponse.setCode(404)
    }
    this.updateReviewResponse.setMessage(message)
    return this.updateReviewResponse
  }
}

export class ReviewController {
  update (req: express.Request, res: express.Response) {
    const reviewId: string = req.params.id
    const result = new UpdateReviewService(
      new UpdateReviewResponse(),
      new InMemoryReviewRepository()
    ).perform(reviewId)
    res.json(result)
  }
}
