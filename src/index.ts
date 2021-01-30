#!/usr/bin/env node

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import program from 'commander';

import { Friday } from './friday/friday';
import { Validator } from './validator/validator';

clear();
console.log(chalk.red(figlet.textSync('friday-cli', { horizontalLayout: 'full' })));

program
  .version('0.0.3')
  .description('Friday CLI')
  .option('-t, --thirteen', 'get the nearest friday the 13th, possible to combine with --from')
  .option('-f, --from <string>', 'from that date format: YYYY-MM-DD')
  .option('-b, --black', 'get the black friday of a year, without --year flag return the current year')
  .option('-y, --year <number>', 'in that year')
  .parse(process.argv);

try {
  const { thirteen, black, from, year } = program.opts();
  const friday = new Friday();
  const validator = new Validator();

  if (thirteen) {
    const nextFridayThe13th = friday.getNextFridayThe13th(from ? new Date(validator.isValidDate(from)) : new Date());
    console.log(nextFridayThe13th.toLocaleDateString('hu-HU'));
  }

  if (black) {
    const blackFriday = friday.getDateOfBlackFridayByYear(year ? year : new Date().getFullYear());
    console.log(blackFriday.toLocaleDateString('hu-HU'));
  }
} catch (error) {
  console.log(chalk.red(error.toString()));
}

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
