import Enum from '../index.esm.js'
import { isSomeString } from '@locustjs/base';

// -------------- BaseEnum -----------------
describe('locustjs-enum test suite: testing BaseEnum', function() {
  const Color = Enum.define({ red: 0, green: 1, blue: 2}, 'Color');
  
  it(`enum.name`, function() {
     expect(isSomeString(Color.name)).toBe(true);
  });
  
  it(`enum.name == name`, function() {
     expect(Color.name).toEqual('Color');
  });
  
  it(`Color.red != undefined`, function() {
     expect(Color.red).toBeDefined();
  });
  
  it(`Color.green != undefined`, function() {
     expect(Color.green).toBeDefined();
  });
  
  it(`Color.blue != undefined`, function() {
     expect(Color.blue).toBeDefined();
  });
  
  it(`Color.red == 0`, function() {
     expect(Color.red).toEqual(0);
  });
  
  it(`Color.green == 1`, function() {
     expect(Color.green).toEqual(1);
  });
  
  it(`Color['blue'] == 2`, function() {
     expect(Color['blue']).toEqual(2);
  });
  
  it(`Color[0] == 'red'`, function() {
     expect(Color[0] == 'red').toBe(true);
  });
  
  it(`Color[1]`, function() {
     expect(Color[1]).toEqual('green');
  });
  
  it(`Color[4]`, function() {
     expect(Color[4]).toBeUndefined();
  });
  
  it(`Color.green === 1`, function() {
     expect(Color.green).toEqual(1);
  });
  
  it(`Color.Red == undefined`, function() {
     expect(Color.Red).toBeUndefined();
  });
  
  it(`Color.isValid(0)`, function() {
     expect(Color.isValid(0)).toBe(true);
  });
  
  it(`Color.isValid('red')`, function() {
     expect(Color.isValid('red')).toBe(true);
  });
  
  it(`Color.isValid(4)`, function() {
     expect(Color.isValid(4)).toBe(false);
  });
  
  it(`Color.isValid(undefined)`, function() {
     expect(Color.isValid(undefined)).toBe(false);
  });
  
  it(`Color.isValid(null)`, function() {
     expect(Color.isValid(null)).toBe(false);
  });
  
  it(`Color.isValid('Red')`, function() {
     expect(Color.isValid('Red')).toBe(false);
  });
  
  it(`Color.isValid({})`, function() {
     expect(Color.isValid({})).toBe(false);
  });
  
  it(`Color.equals(0, Color.red)`, function() {
     expect(Color.equals(0, Color.red)).toBe(true);
  });
  
  it(`Color.equals('red', Color.red)`, function() {
     expect(Color.equals('red', Color.red)).toBe(true);
  });
  
  it(`Color.equals(Color.green, 1)`, function() {
     expect(Color.equals(Color.green, 1)).toBe(true);
  });
  
  it(`Color.equals(Color.green, 'green')`, function() {
     expect(Color.equals(Color.green, 'green')).toBe(true);
  });
  
  it(`Color.getNames().length`, function() {
     expect(Color.getNames().length).toEqual(3);
  });
  
  it(`Color.getNames().indexOf('green')`, function() {
     expect(Color.getNames().indexOf('green')).toEqual(1);
  });
  
  it(`Color.getValues().length`, function() {
     expect(Color.getValues().length).toEqual(3);
  });
  
  it(`Color.toArray().length`, function() {
     expect(Color.toArray().length).toEqual(3);
  });
  
  it(`Color.getString(Color.red)`, function() {
     expect(Color.getString(Color.red)).toEqual('red');
  });
  
  it(`Color.getString(Color.green)`, function() {
     expect(Color.getString(Color.green)).toEqual('green');
  });
  
  it(`Color.getString(Color.blue)`, function() {
     expect(Color.getString(Color.blue)).toEqual('blue');
  });
  
  it(`Color.getString(2)`, function() {
     expect(Color.getString(2)).toEqual('blue');
  });
  
  it(`Color.getString('2')`, function() {
     expect(Color.getString('2')).toEqual('blue');
  });
  
  it(`Color.getString('blue')`, function() {
     expect(Color.getString('blue')).toEqual('blue');
  });
  
  it(`Color.getString('Blue')`, function() {
     expect(Color.getString('Blue')).toEqual('red');
  });
  
  it(`Color.getString(4)`, function() {
     expect(Color.getString(4)).toEqual('red');
  });
  
  it(`Color.getString(2, 'green')`, function() {
     expect(Color.getString(2, 'green')).toEqual('blue');
  });
  
  it(`Color.getString('blue', 'green')`, function() {
     expect(Color.getString('blue', 'green')).toEqual('blue');
  });
  
  it(`Color.getString('Blue', 'green')`, function() {
     expect(Color.getString('Blue', 'green')).toEqual('green');
  });
  
  it(`Color.getString(4, 'green')`, function() {
     expect(Color.getString(4, 'green')).toEqual('green');
  });
  
  it(`Color.getString(4, 'Green')`, function() {
     expect(Color.getString(4, 'Green')).toEqual('red');
  });
  
  it(`Color.getString('Blue', 'Green')`, function() {
     expect(Color.getString('Blue', 'Green')).toEqual('red');
  });
  
  
  
  it(`Color.getNumber(2)`, function() {
     expect(Color.getNumber(2)).toEqual(2);
  });
  
  it(`Color.getNumber('blue')`, function() {
     expect(Color.getNumber('blue')).toEqual(2);
  });
  
  it(`Color.getNumber('Blue')`, function() {
     expect(Color.getNumber('Blue')).toEqual(0);
  });
  
  it(`Color.getNumber(4)`, function() {
     expect(Color.getNumber(4)).toEqual(0);
  });
  
  it(`Color.getNumber(2, 'green')`, function() {
     expect(Color.getNumber(2, 'green')).toEqual(2);
  });
  
  it(`Color.getNumber('blue', 'green')`, function() {
     expect(Color.getNumber('blue', 'green')).toEqual(2);
  });
  
  it(`Color.getNumber('Blue', 'green')`, function() {
     expect(Color.getNumber('Blue', 'green')).toEqual(1);
  });
  
  it(`Color.getNumber(4, 'green')`, function() {
     expect(Color.getNumber(4, 'green')).toEqual(1);
  });
  
  it(`Color.getNumber(4, 'Green')`, function() {
     expect(Color.getNumber(4, 'Green')).toEqual(0);
  });
  
  it(`Color.getNumber('Blue', 'Green')`, function() {
     expect(Color.getNumber('Blue', 'Green')).toEqual(0);
  });
});