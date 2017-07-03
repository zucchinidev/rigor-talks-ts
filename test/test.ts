import { expect, should } from 'chai';
import { stub, restore } from 'sinon';
import 'mocha';

import { Temperature } from '../src/Temperature/Temperature';
import { TemperatureNegativeException } from '../src/Temperature/TemperatureNegativeException';
import { TemperatureTestClass } from './TemperatureTestClass';
import { ColdThresholdSource } from '../src/Temperature/ColdThresholdSource';

should();

describe('Temperature class', () => {
  it('should return a valid temperature with named constructor', () => {
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

  it('should return a super-cold temperature', () => {
    const coldThresholdSource = new ColdThresholdSource();
    stub(coldThresholdSource, 'getThreshold').returns(5);
    const measure = 4;
    const result: Temperature = TemperatureTestClass.take(measure);
    result.isSuperCold(coldThresholdSource).should.be.equals(true);
    restore(coldThresholdSource.getThreshold);
  });

  it('should sum two measures', () => {
    const measure = 1;
    const temOne: Temperature = TemperatureTestClass.take(measure);
    const temTwo: Temperature = TemperatureTestClass.take(measure);
    const newMeasure = temOne.add(temTwo);
    newMeasure.getMeasure().should.be.equals(2);
    newMeasure.should.not.be.eql(temOne);
  });
});
