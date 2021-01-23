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

  addDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}
