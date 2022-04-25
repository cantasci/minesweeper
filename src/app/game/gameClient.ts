export const SOCKET_ENDPOINT = 'wss://hometask.eg1236.com/game1/';

export type Socket = WebSocket;
class GameClient {
  private static socketInstance: Socket;

  public static get socket() {
    return this.socketInstance;
  }

  public static set socket(socketConnection: Socket) {
    this.socketInstance = socketConnection;
  }

  public static createConnection(url: string = SOCKET_ENDPOINT) {
    if (GameClient.socket) {
      return GameClient.socket;
    }
    const socketConnection = new WebSocket(url);
    GameClient.socket = socketConnection;
    return GameClient.socket;
  }
}

export { GameClient };
