/* eslint-disable linebreak-style */

export default class ErrorRepository {
  constructor(errors) {
    this.map = new Map(errors);
  }

  translate(code) {
    if (this.map.get(code) === undefined) {
      return 'Unknown error';
    }
    return this.map.get(code);
  }
}
