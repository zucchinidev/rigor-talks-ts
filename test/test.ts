import { expect, should } from 'chai';
import 'mocha';

import { Temperature } from '../src/Temperature/Temperature';
import { TemperatureNegativeException } from '../src/Temperature/TemperatureNegativeException';
import { TemperatureTestClass } from '../src/Temperature/TemperatureTestClass';

should();

describe('Temperature class', () => {
  it('should return an object with measure', () => {
    const measure = 1;
    const result: Temperature = TemperatureTestClass.take(measure);
    result.getMeasure().should.be.equals(measure);
  });

  it('should return an TemperatureNegativeException', () => {
    expect(() => TemperatureTestClass.take(-1)).to.throw(TemperatureNegativeException, 'Measure -1 must be positive');
  });

  it('should create a valid temperature with named constructor', () => {
    const measure = 18;
    const result: Temperature = TemperatureTestClass.take(measure);
    result.getMeasure().should.be.equals(measure);
  });

  it('should return a super-hot temperature', () => {
    const measure = 60;
    const result: Temperature = TemperatureTestClass.take(measure);
    result.isSuperHot().should.be.equals(true);
  });
});
