import {TemperatureNegativeException} from './TemperatureNegativeException';

export class Temperature {
  private constructor(private measure: number) {
    this.setMeasure(measure);
  }

  getMeasure(): number {
    return this.measure;
  }

  private setMeasure(measure: number) {
    Temperature.checkMeasureIsPositive(measure);
    this.measure = measure;
  }

  private static checkMeasureIsPositive(measure: number) {
    if (measure < 0) {
      throw TemperatureNegativeException.fromMeasure(measure);
    }
  }

  static take(measure: number): Temperature {
    return new Temperature(measure);
  }
}
