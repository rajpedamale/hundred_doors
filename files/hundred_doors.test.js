'use strict';

const hundredDoors = require('./hundred_doors');

describe('Hundred Doors', () => {
  it('should have 100 chars', () => {
    expect(hundredDoors().length).toEqual(100);
  });
  it('should have only open or closed states', () => {
    expect(/[^@#]/.test(hundredDoors()).toBeFalse()
  });
});
