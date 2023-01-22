'use strict';

const hundredDoors = require('./hundred_doors');
const length = 100;
let testDoors = '';
describe('Hundred Doors', () => {
  beforeEach(() => {
    testDoors = Array.from({length}, () => '#');
  });
  it('should have 100 chars', () => {
    expect(hundredDoors(testDoors).length).toEqual(100);
  });
  it('should have only open or closed states', () => {
    expect(/[^@#]/.test(hundredDoors(testDoors))).toBeFalsy();
  });
  it('should have all open doors on first visit', () => {
    expect(/[^#]/.test(hundredDoors(testDoors))).toBeFalsy();
    expect(/[^@]/.test(hundredDoors(testDoors, 1))).toBeFalsy();
  });
});
