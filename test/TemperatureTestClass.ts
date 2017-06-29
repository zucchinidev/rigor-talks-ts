import { Temperature } from './Temperature';

export class TemperatureTestClass extends Temperature {

  protected getThreshold () {
    return 50;
  }
}
