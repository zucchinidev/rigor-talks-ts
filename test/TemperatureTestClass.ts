import { Temperature } from '../src/Temperature/Temperature';

export class TemperatureTestClass extends Temperature {

  protected getThreshold () {
    return 50;
  }
}
