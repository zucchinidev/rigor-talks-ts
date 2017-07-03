import { TemperatureNegativeException } from './TemperatureNegativeException';
import { ColdThresholdSource } from './ColdThresholdSource';

export class Temperature {
  constructor (private measure: number) {
    this.setMeasure(measure);
  }

  getMeasure (): number {
    return this.measure;
  }

  isSuperHot (): boolean {
    const threshold = this.getThreshold();
    return this.getMeasure() > threshold;
  }

  isSuperCold (coldThresholdSource: ColdThresholdSource) {
    const threshold = coldThresholdSource.getThreshold();
    return this.getMeasure() <= threshold;
  }

  add(temTwo: Temperature): Temperature {
    return Temperature.take(this.getMeasure() + temTwo.getMeasure());
  }

  // TODO delete infrastructure detail, mock this in test with TestClass
  protected getThreshold () {
    return FalseLinkToInfrastructure.getConnection().fetch();
  }

  private setMeasure (measure: number) {
    Temperature.checkMeasureIsPositive(measure);
    this.measure = measure;
  }

  private static checkMeasureIsPositive (measure: number) {
    if (measure < 0) {
      throw TemperatureNegativeException.fromMeasure(measure);
    }
  }

  static take (measure: number): Temperature {
    return new Temperature(measure);
  }
}

class FalseLinkToInfrastructure {
  static getConnection () {
    return new FalseLinkToInfrastructure();
  }

  fetch () {
    return 10;
  }
}
