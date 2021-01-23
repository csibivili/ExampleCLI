const test = require('tape');
import { Friday } from './friday';

test('getNextFridayThe13th: if from is 2021-01-23 it should return with 2021-08-13', (t: any) => {
  //arrange
  const friday = new Friday();
  const from = new Date('2021-01-23');

  //act
  const result = friday.getNextFridayThe13th(from);

  //asser
  t.equal(+result, +new Date('2021-08-13'));
  t.end();
});
