// 责任链模式

// 改造后
// export abstract class BaseHandler {
//   constructor() {}
//   abstract handle(req: ChainRequest, res: ChainResponse): void;
// }

// export abstract class Chain {
//   abstract getNodeList(): Array<BaseHandler>;
//   run(req: ChainRequest, res: ChainResponse): void {
//     this.getNodeList().forEach((c) => c.handle(req, res));
//   }
// }

// export declare class ChainRequest {
//   value: any;
// }

// export declare class ChainResponse {
//   result: any;
// }
