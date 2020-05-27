// 责任链模式
/*

import { BaseHandler, Chain, ChainRequest, ChainResponse } from './ChainOfResponsibility';

// 流程上的每个处理环节
class h1 extends BaseHandler {
  handle(req: ChainRequest, res: ChainResponse) {
    console.log('h1 req = ', req);
    console.log('h1 res = ', res);
  }
}

class h2 extends BaseHandler {
  handle(req: ChainRequest, res: ChainResponse) {
    console.log('h2 req = ', req);
    console.log('h2 res = ', res);
  }
}

// class ConcreteChain extends Chain {
//   getNodeList(): BaseHandler[] {
//     return [new h1(), new h2()]
//   }
// }

// 外卖算钱 1. 打折 2 商家满减 3 美图红包
class Discount extends BaseHandler {
  handle(req: ChainRequest, res: ChainResponse) {
    req.value > 100 && (req.value *= 0.8);
  }
}

class FullReduction extends BaseHandler {
  handle(req: ChainRequest, res: ChainResponse) {
    if (req.value > 65) {
      req.value = req.value - 30;
    } else if (req.value > 39) {
      req.value = req.value - 20;
    }
  }
}

class RedEnvelope extends BaseHandler {
  handle(req: ChainRequest, res: ChainResponse) {
    req.value -= req.envelope || 0;
  }
}

class ConcreteChain extends Chain {
  getNodeList(): BaseHandler[] {
    return [new Discount(), new FullReduction(), new RedEnvelope()];
  }
}

let c = new ConcreteChain();
let chainRequest = new ChainRequest(40, 5);
let chainResponse = new ChainResponse(11);

c.run(chainRequest, chainResponse);
setTimeout(() => {
  console.log('chainRequest = ', chainRequest);
}, 500);

let chainRequest1 = new ChainRequest(120, 10);
let chainResponse1 = new ChainResponse(11);

c.run(chainRequest1, chainResponse1);
setTimeout(() => {
  console.log('chainRequest = ', chainRequest1);
}, 500);

*/

// 观察者模式

/*
import { Observer, Subject } from './Observer';

class Sub extends Subject {}

class Ob1 extends Observer {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
  update() {
    this.name = 'new-name';
  }
}
class Ob2 extends Observer {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
  update() {
    this.name = 'new-name-2';
  }
}

function run(): void {
  let o1 = new Ob1('ob1');
  let o2 = new Ob2('ob2');
  let subject = new Sub([o1]);
  subject.add(o2);
  subject.notify();

  console.log('o1 = ', o1);
  console.log('o2 = ', o2);
}

run();

*/

// 发布订阅模式

/*
import { EventCenter, Handlers } from './PubSub';

class e1 extends EventCenter {
  constructor(handles: Handlers) {
    super(handles);
  }
}

let ec = new e1({});

ec.on('a', function (d1: any, d2: any) {
  console.log('d1 = ', d1);
  console.log('d2 = ', d2);
});

ec.on('a', function (data: any) {
  console.log('data2 = ', data);
});

console.log('e = ', ec);
ec.emit('a', 'data1', 'data2');

*/

// 单例模式

/*
import { Sington } from './design_mode/Sington';

let a = Sington.getInstance();

let b = Sington.getInstance();

console.log('a=b = ', a === b);

*/
