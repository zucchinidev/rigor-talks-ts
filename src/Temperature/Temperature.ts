import {TemperatureNegativeException} from './TemperatureNegativeException';

export class Temperature {
  constructor(private measure: number) {
    this.setMeasure(measure);
  }

  getMeasure(): number {
    return this.measure;
  }

  private setMeasure(measure: number) {
    this.checkMeasureIsPositive();
    this.measure = measure;
  }

  private checkMeasureIsPositive() {
    if (this.measure < 0) {
      throw new TemperatureNegativeException('Measure should be positive');
    }
  }

  static take(measure: number): Temperature {
    return new Temperature(measure);
  }
}
