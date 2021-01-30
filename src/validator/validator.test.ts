import test from 'tape';

import { Validator } from './validator';

test('isValidDate: 2021-01-23 should return true', (t: any) => {
  //arrange
  const validator = new Validator();
  const input = '2021-01-23';

  //act
  const result = validator.isValidDate(input);

  //assert
  t.equal(result, input);
  t.end();
});

test('isValidDate: 2021.01.23 should throw error', (t: any) => {
  //arrange
  const validator = new Validator();

  //act
  t.throws(() => validator.isValidDate('2021.01.23'), 'The dateformat is invalid.');
  t.end();
});

test('isValidDate: 2021-1-23 should throw error', (t: any) => {
  //arrange
  const validator = new Validator();

  //act
  t.throws(() => validator.isValidDate('2021-1-23'), 'The dateformat is invalid.');
  t.end();
});
