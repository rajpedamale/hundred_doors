'use strict';

const hundredDoors = require('./hundred_doors');
const length = 100;
let testDoors = '';
describe('Hundred Doors', () => {
  beforeEach(() => {
    testDoors = [...Array(length)].map(() => {
      return '@';
    });
  });
  it('should have 100 chars', () => {
    expect(hundredDoors().length).toEqual(100);
  });
  it('should have only open or closed states', () => {
    expect(/[^@#]/.test(hundredDoors())).toBeFalsy();
  });
});
