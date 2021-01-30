import test from 'tape';

import { Validator } from './validator';

test('isValidDate: 2021-01-23 should return true', (t: any) => {
  //arrange
  const validator = new Validator();

  //act
  const result = validator.isValidDate('2021-01-23');

  //assert
  t.equal(result, true);
  t.end();
});

// test('isValidDate: 2021.01.23 should return false', (t: any) => {
//   //arrange
//   const validator = new Validator();

//   //act
//   const result = validator.isValidDate('2021.01.23');

//   //assert
//   t.equal(result, false);
//   t.end();
// });
