import type { TaskStateModel } from '../models/TaskStateModel.tsx';

let instance: TimerWorkerManager | null = null;

export class TimerWorkerManager {
  private worker: Worker;
  
  private constructor() {
    this.worker = new Worker( new URL( "./timeWorker.js", import.meta.url ) );
  }
  
  static getInstance() {
    return instance || ( instance = new TimerWorkerManager() );
  }
  
  postMessage(message: TaskStateModel) {
    this.worker.postMessage( message );
  }
  
  onmessage(callback: (event: MessageEvent) => void) {
    this.worker.onmessage = callback;
  }
  
  terminate() {
    this.worker.terminate();
    instance = null;
  }
}