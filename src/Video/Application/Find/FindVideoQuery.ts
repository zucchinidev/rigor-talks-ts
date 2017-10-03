import { Query } from '../../../Shared/Domain/Bus/Query/Query'
import { Immutable } from '../../../Shared/Domain/Decorators/Immutable'

@Immutable
export class FindVideoQuery implements Query {
  constructor (private _id: string) {}

  public id (): string {
    return this._id
  }
}