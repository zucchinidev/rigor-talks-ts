import { v4 } from 'uuid'
import { InvalidArgumentException } from '../../Shared/Domain/Exeptions/InvalidArgumentException'

export class Uuid {
  private _value: string

  public static random (): Uuid {
    return new this(v4())
  }

  constructor (value: string) {
    this.guard(value)
    this._value = value
  }

  public value (): string {
    return this._value
  }

  private guard (value: string): void | InvalidArgumentException {
    const isValid: boolean = value.length >= 36
    if (!isValid) {
      const className = this.constructor['name']
      const msg = `${className} does not allow the value ${value}`
      throw new InvalidArgumentException(msg)
    }
  }

  public toString (): string {
    return this.value()
  }
}