export class Random {
  public static getInteger(miniamal: number, maximal: number) {
    return Math.floor(this.getFloat(miniamal, maximal));
  }
  public static getFloat(miniamal: number, maximal: number) {
    const rand = miniamal + Math.random() * (maximal + 1 - miniamal);
    return rand;
  }
}
