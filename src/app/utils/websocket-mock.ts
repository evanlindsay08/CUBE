class WebSocketMock {
  onopen: (() => void) | null = null;
  onclose: (() => void) | null = null;
  onmessage: ((event: any) => void) | null = null;
  onerror: ((error: any) => void) | null = null;
  readyState: number = 0;

  constructor(url: string) {
    setTimeout(() => {
      this.readyState = 1;
      if (this.onopen) this.onopen();
    }, 0);
  }

  send(data: any) {
    // Mock implementation
  }

  close() {
    this.readyState = 3;
    if (this.onclose) this.onclose();
  }
}

export default WebSocketMock; 