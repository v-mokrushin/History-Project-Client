export class Server {
  // private static serverAddress = "https://www.haze-of-war.store";
  // private static serverAddress = "https://www.haze-of-war.store";
  // private static serverAddress = "http://62.113.103.119:3000";
  private static serverAddress = "http://localhost:8080";

  public static path(sourcePath: string): string {
    return this.serverAddress + sourcePath;
  }
}
