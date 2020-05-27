export class Sington {
  private static instance: Sington;
  private constructor() {}
  static getInstance(): Sington {
    !this.instance && (this.instance = new Sington());
    return this.instance;
  }
}
