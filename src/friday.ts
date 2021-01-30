export class Friday {
  getNextFridayThe13th(from: Date): Date {
    let date = new Date(from);
    //base case
    if (date.getDate() === 13 && date.getDay() === 5) {
      return date;
    }
    date = this.addDays(date, 1);
    return this.getNextFridayThe13th(date);
  }

  getDateOfBlackFridayByYear(year: number): Date {
    let date = new Date(`${year}-11-01`);
    let counter = 0;
    while (counter < 4) {
      if (date.getDay() === 4) {
        counter++;
      }
      date = this.addDays(date, 1);
    }
    return date;
  }

  addDays(date: Date, days: number) {
    const result = new Date(date);
    result.setTime(result.getTime() + days * 24 * 3600 * 1000);
    return result;
  }
}
