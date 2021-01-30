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

test('addDays: if date is 2021-03-28 and 1 day added it should return 2021-03-29', (t: any) => {
  //arrange
  const friday = new Friday();
  const date = new Date('2021-03-28');

  //act
  const result = friday.addDays(date, 1);

  //assert
  t.equal(+result, +new Date('2021-03-29'));
  t.end();
});

test('getDateOfBlackFridayByYear: if year 2017 it should return 2017-11-24', (t: any) => {
  //arrange
  const friday = new Friday();

  //act
  const result = friday.getDateOfBlackFridayByYear(2017);

  //assert
  t.equal(+result, +new Date('2017-11-24'));
  t.end();
});

test('getDateOfBlackFridayByYear: if year 2018 it should return 2018-11-23', (t: any) => {
  //arrange
  const friday = new Friday();

  //act
  const result = friday.getDateOfBlackFridayByYear(2018);

  //assert
  t.equal(+result, +new Date('2018-11-23'));
  t.end();
});

test('getDateOfBlackFridayByYear: if year 2019 it should return 2019-11-29', (t: any) => {
  //arrange
  const friday = new Friday();

  //act
  const result = friday.getDateOfBlackFridayByYear(2019);

  //assert
  t.equal(+result, +new Date('2018-11-29'));
  t.end();
});
