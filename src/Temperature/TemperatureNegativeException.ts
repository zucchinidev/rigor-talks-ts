export class TemperatureNegativeException extends Error {
  constructor(...args: Array<any>) {
    super(...args);
  }

  static fromMeasure(measure: number) {
    return new TemperatureNegativeException(`Measure ${measure} must be positive`);
  }
}
