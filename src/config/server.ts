export class Server {
  private static serverAddress = "http://localhost:3001";

  public static path(sourcePath: string): string {
    return this.serverAddress + sourcePath;
  }
}

console.log(Server.path("/users"));
