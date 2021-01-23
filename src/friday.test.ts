const test = require('tape');
import { Friday } from './friday';

test('getNextFridayThe13th: if from is 2021-01-23 it should return with 2021-08-13', (t: any) => {
  //arrange
  const friday = new Friday();
  const from = new Date('2021-01-23');

  //act
  const result = friday.getNextFridayThe13th(from);

  //assert
  t.equal(+result, +new Date('2021-08-13'));
  t.end();
});

test('addDays: if date is 2021-01-23 and 1 day added it should return 2021-01-24', (t: any) => {
  //arrange
  const friday = new Friday();
  const date = new Date('2021-01-23');

  //act
  const result = friday.addDays(date, 1);

  //assert
  t.equal(+result, +new Date('2021-01-24'));
  t.end();
});
