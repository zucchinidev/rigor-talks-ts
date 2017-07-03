import {InMemoryRepository} from './InMemoryRepository'
import {Review} from '../Domain/Review'
export class InMemoryReviewRepository extends InMemoryRepository<Review> {
  constructor (protected reviews: Array<Review> = []) {
    super(reviews)
  }
}
