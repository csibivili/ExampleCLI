export class Validator {
  isValidDate(input: string): boolean {
    const regex = new RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
    return regex.test(input);
  }
}
