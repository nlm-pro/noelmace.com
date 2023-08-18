import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { Constructor } from '../../shared/lit-dev';

export declare class WithWordingsInterface<T> {
  wordings: T;
}

// require to specify T every time as long a partial type argument inference isn't supported
// see https://github.com/microsoft/TypeScript/pull/26349
export const WithWordings = <T extends Constructor<LitElement>, W>(superClass: T) => {
  class WithWordingElement extends superClass {
    @property({ type: Object, attribute: false })
    wordings!: W;

    override shouldUpdate() {
      return !!this.wordings;
    }
  }
  return WithWordingElement as Constructor<WithWordingsInterface<W>> & T;
};
