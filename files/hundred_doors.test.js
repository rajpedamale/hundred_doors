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
  it('should have every second door closed on second visit', () => {
    expect(/[^#]/.test(hundredDoors(testDoors))).toBeFalsy();
    expect(/(@#){50}/.test(hundredDoors(testDoors, 2))).toBeTruthy();
  });
  it('should complete 100 visits', () => {
    const hundredRounds = hundredDoors(testDoors, 100);
    console.log(hundredRounds);
    expect(hundredRounds).toBeTruthy();
  });

});
