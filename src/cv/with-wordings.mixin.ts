import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T = {}> = new (...args: any[]) => T;

export declare class WithWordingsInterface<T> {
  wordings: T;
}

// require to specify T every time as long a partial type argument inference isn't supported
// see https://github.com/microsoft/TypeScript/pull/26349
export const WithWordings = <T extends Constructor<LitElement>, W>(superClass: T) => {
  class WithWordingElement extends superClass {
    @property({ type: Object, attribute: false })
    wordings!: W;
  }
  return WithWordingElement as Constructor<WithWordingsInterface<W>> & T;
};
