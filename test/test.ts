import {expect, should} from 'chai';
import 'mocha';

import {Temperature} from '../src/Temperature/Temperature';
import {TemperatureNegativeException} from '../src/Temperature/TemperatureNegativeException';

should();

describe('Temperature class', () => {
  it('should return an object with measure', () => {
    const measure = 1;
    const result: Temperature = new Temperature(measure);
    result.getMeasure().should.be.equals(measure);
  });

  it('should return an TemperatureNegativeException', () => {
    expect(() => new Temperature(-1)).to.throw(TemperatureNegativeException, 'Measure should be positive');
  });
});
