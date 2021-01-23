#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');

clear();
console.log(chalk.red(figlet.textSync('friday-cli', { horizontalLayout: 'full' })));

program
  .version('0.0.1')
  .description('Friday CLI')
  .option('-t, --thirteen', 'get the nearest friday the 13th')
  .parse(process.argv);

if (program.thirteen) {
  //return the date of the nearest friday the 13th
}

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
