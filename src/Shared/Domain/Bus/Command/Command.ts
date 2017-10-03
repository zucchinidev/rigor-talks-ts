import { Uuid } from '../../../../Types/ValueObject/Uuid'

export class Command {
  constructor (protected _commandId: Uuid) {

  }

  public commandId () {
    return this._commandId
  }
}