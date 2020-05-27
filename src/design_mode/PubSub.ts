// 发布订阅模式 扩展后可以是redux的store

export abstract class EventCenter {
  handlers: Handlers;
  constructor(handlers: Handlers = {}) {
    this.handlers = handlers;
  }
  on(type: string, handler: (...rest: any) => any) {
    Array.isArray(this.handlers[type]) ? this.handlers[type].push(handler) : (this.handlers[type] = [handler]);
  }
  emit(type: string, ...rest: any): void {
    let hs = this.handlers[type];
    if (hs && hs.length) {
      hs.forEach((x) => x.apply(this, rest));
    }
  }
}

export interface Handlers {
  [propName: string]: Array<(...rest: any) => any>;
}
