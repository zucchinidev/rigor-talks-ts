import {Repository} from './Repository'
export class InMemoryRepository<T extends Repository> {
  constructor (protected reviews: Array<T> = []) {}

  update (review: T): void {
    const index = this.reviews.findIndex((r: T) => r.id === review.id)
    if (index !== -1) {
      this.reviews.splice(index, 1, review)
    }
  }

  find (reviewId: string): T | void {
    return this.reviews.find((r: T) => r.id === reviewId)
  }
}
