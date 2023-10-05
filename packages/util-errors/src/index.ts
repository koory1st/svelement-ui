export class ArgumentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ArgumentError';
  }
}

export class SvelPropValidateError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SvelPropValidateError';
  }
}
