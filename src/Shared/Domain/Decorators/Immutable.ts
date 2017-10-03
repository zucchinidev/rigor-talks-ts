export function Immutable (target: any) {
  const original = target

  function construct (constructor: any, args: Array<any>) {
    const c: any = function (this: any) {
      return constructor.apply(this, args)
    }
    c.prototype = constructor.prototype
    const instance = new c()
    Object.freeze(instance)
    return instance
  }

  const newConstructor: any = function (...args: Array<any>) {
    return construct(original, args)
  }

  // intanceof operator still works
  newConstructor.prototype = original.prototype

  // return new constructor (will override original)
  return newConstructor
}