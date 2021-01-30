#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');

import { Friday } from './friday';

clear();
console.log(chalk.red(figlet.textSync('friday-cli', { horizontalLayout: 'full' })));

program
  .version('0.0.1')
  .description('Friday CLI')
  .option('-t, --thirteen <type>', 'get the nearest friday the 13th')
  .option('-b, --black <type>', 'get the black friday of the given year')
  .parse(process.argv);

const { thirteen, black } = program.opts();

if (thirteen) {
  const friday = new Friday();
  const nextFridayThe13th = friday.getNextFridayThe13th(thirteen ? new Date(thirteen) : new Date());
  console.log(nextFridayThe13th.toLocaleDateString('hu-HU'));
}

if (black) {
  console.log(black);
}

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
