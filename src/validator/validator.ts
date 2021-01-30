export class Validator {
  isValidDate(input: string): string {
    const regex = new RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
    if (regex.test(input)) {
      return input;
    } else {
      throw new Error('The dateformat is invalid.');
    }
  }

  isValidInteger(input: string): number {
    const parsed: number = parseInt(input);
    if (!isNaN(parsed)) {
      return parsed;
    } else {
      throw new Error('The provided value is not an integer.');
    }
  }
}
