export class Random {
  public static getInteger(miniamal: number, maximal: number) {
    return Math.floor(this.getFloat(miniamal, maximal));
  }
  public static getFloat(miniamal: number, maximal: number) {
    const rand = miniamal + Math.random() * (maximal + 1 - miniamal);
    return rand;
  }
  public static getUniqueId() {
    return (
      Date.now().toString(36) +
      Math.floor(
        Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)
      ).toString(36)
    );
  }
}
