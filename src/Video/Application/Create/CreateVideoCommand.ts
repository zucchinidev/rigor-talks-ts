import { Command } from '../../../Shared/Domain/Bus/Command/Command'
import { Uuid } from '../../../Types/ValueObject/Uuid'
import { Immutable } from '../../../Shared/Domain/Decorators/Immutable'

@Immutable
export class CreateVideoCommand extends Command {
  constructor (commandId: Uuid, private _id: string,
               private _title: string, private _url: string, private _courseId: string) {
    super(commandId)
  }

  public id (): string {
    return this._id
  }

  public title (): string {
    return this._title
  }

  public url (): string {
    return this._url
  }

  public courseId (): string {
    return this._courseId
  }
}