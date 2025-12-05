let instance: TimerWorkerManager | null = null;
export class TimerWorkerManager {
  private worker: Worker;
  
  private constructor() {
    this.worker = new Worker(
      new URL("./timeWorker.js", import.meta.url),
      { type: "classic" }
    );
  }
  
  static getInstance() {
    return instance || (instance = new TimerWorkerManager());
  }
  
  postMessage(message: any) {
    this.worker.postMessage(message);
  }
  
  onmessage(callback: (event: MessageEvent) => void) {
    this.worker.onmessage = callback;
  }
  
  terminate() {
    this.worker.terminate();
    instance = null;
  }
}